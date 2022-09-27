import React from "react";

// Styles
import "./index.css";

// Components
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-full h-screen bg-[url('./images/bg-intro-mobile.png')] bg-cover desktop:bg-contain bg-red font-['Poppins']">
      <Form />
    </div>
  );
};

export default App;
