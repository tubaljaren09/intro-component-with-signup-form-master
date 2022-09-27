import React, { useState, useEffect } from "react";

const Form = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name cannot be empty!";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name cannot be empty!";
    }
    if (!values.email) {
      errors.email = "Email cannot be empty!";
    }
    if (!values.password) {
      errors.password = "Password cannot be empty!";
    }
    return errors;
  };
  return (
    <div className="w-[90%] m-auto h-full flex flex-col justify-center items-center text-[#fff] desktop:w-[60%] desktop:flex-row desktop:gap-[80px]">
      <div className="text-center desktop:w-[90%] desktop:text-left">
        <h1 className="font-bold text-3xl mb-[25px] desktop:text-[50px] desktop:leading-[60px]">
          Learn to code by watching others
        </h1>
        <p className="leading-7 text-[16px]">
          See how experienced developers solve problem in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="desktop:w-full">
        <button className="bg-blue text-white py-5 px-4 rounded-[10px] mt-[60px] font-[400] text-center shadow-[1px_8px_1px] shadow-black/20 w-full">
          <span className="font-bold">Try it free 7 days</span> then $20/mo.
          thereafter
        </button>
        <form
          onSubmit={handleSubmit}
          className="bg-[#fff] shadow-[1px_8px_1px] shadow-black/20 rounded-[10px] px-8 pt-6 pb-7 mb-4 mt-[50px]"
        >
          <div className="mb-4">
            <input
              className={
                formErrors.firstName
                  ? "shadow appearance-none border-2 border-[#d9534f] rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
                  : "shadow appearance-none border-2 border-black/10 rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
              }
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            <p className="text-[#d9534f] text-right mt-[10px]">
              {formErrors.firstName}
            </p>
          </div>
          <div className="mb-4">
            <input
              className={
                formErrors.lastName
                  ? "shadow appearance-none border-2 border-[#d9534f] rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
                  : "shadow appearance-none border-2 border-black/10 rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
              }
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
            <p className="text-[#d9534f] text-right mt-[10px]">
              {formErrors.lastName}
            </p>
          </div>
          <div className="mb-4">
            <input
              className={
                formErrors.email
                  ? "shadow appearance-none border-2 border-[#d9534f] rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
                  : "shadow appearance-none border-2 border-black/10 rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
              }
              name="email"
              type="text"
              placeholder="Email Address"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-[#d9534f] text-right mt-[10px]">
              {formErrors.email}
            </p>
          </div>
          <div className="mb-6">
            <input
              className={
                formErrors.firstName
                  ? "shadow appearance-none border-2 border-[#d9534f] rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
                  : "shadow appearance-none border-2 border-black/10 rounded w-full py-3 px-3 text-[#000] font-[500] leading-tight outline-blue focus:shadow-outline"
              }
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="text-[#d9534f] text-right mt-[10px]">
              {formErrors.password}
            </p>
          </div>
          <button className="bg-green text-white font-medium py-3 px-4 rounded-[5px] w-full border-b-4 border-[#16a34a]">
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="text-[#a1a1aa] text-[11px] text-center mt-[10px]">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-red font-bold">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
