import React from "react";
import img from "./Component/Images/illustration-sign-up-desktop.svg";
import img1 from "./Component/Images/illustration-sign-up-mobile.svg";
import tick from "./Component/Images/icon-list.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [emailData, setEmailData] = useState("");
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const handleSubmit = (event) => {
    if (emailData) {
      setIsValidEmail(false);
    }
    event.preventDefault();
    if (emailData != "") navigate("/mail", { state: emailData });
  };

  const handleChange = (event) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setIsValidEmail(isValid);
    if (isValidEmail) {
      setEmailData(event.target.value);
    }
  };
  return (
    <div className="bg-DarkSlateGrey h-screen box-border overflow-hidden font-Roboto max-sm:overflow-visible max-sm:h-fit  flex flex-wrap max-sm:bg-white  ">
      <div
        className="bg-white flex flex-row lg:w-[900px] h-fit mx-auto my-24 rounded-[20px] gap-5 max-sm:flex max-sm:flex-col-reverse
      max-sm:my-0"
      >
        <div className=" box-border flex flex-wrap lg:my-5 lg:p-9 lg:mt-8 lg:w-[450px]  ml-[25px] ">
          <span className="text-DarkSlateGrey font-[700]  text-6xl max-sm:text-5xl ">
            Stay updated!
          </span>
          <p className="mt-5  font-[400]  text-[16px]  ">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="mt-4 max-sm:w-80">
            <ul>
              <li className="mt-2 list-tick ">
                <img src={tick} className="float-left " alt="" />
                <p className=" pl-7">
                  Product discovery and building what matters
                </p>
              </li>
              <li className=" mt-2">
                <img src={tick} className="float-left" alt="" />
                <p className=" pl-7">
                  Measuring to sensure updates are a success
                </p>
              </li>

              <li className="indent-2 mt-2">
                <img src={tick} className="float-left" alt="" />
                And much more!
              </li>
            </ul>
          </div>
          <form
            className="lg:mt-9 flex flex-col lg:w-[400px] max-sm:mt-5 max-sm:w-[350px]"
            onSubmit={handleSubmit}
          >
            <div className="relative ">
              <label className="peer">Email address</label>
              <input
                type="email"
                placeholder="email@company.com"
                className="w-[400px] h-[60px] p-5 border font-[400] text-[16px] rounded-md mt-2 bg-transparent peer  outline-gray-200 invalid:bg-red-100 invalid:outline-Tomato invalid:text-Tomato max-sm:w-[340px]"
                onChange={handleChange}
              />
              <span className=" text-Tomato invisible absolute top-0 font-[700] right-0 peer-invalid:visible  max-sm:right-3  ">
                Valid email required
              </span>
            </div>
            <button className="w-[400px] h-[60px]  border rounded-md mt-5   bg-DarkSlateGrey text-white hover:bg-gradient-to-r from-[#f43f5e] to-Tomato max-sm:w-[340px] max-sm:mb-3">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="lg:p-4">
          <img
            className="h-[550px] hidden lg:block"
            src={img}
            alt="illustration-sign-up-desktop"
          />
          <img
            className="hidden max-sm:block  border max-sm:w-[100%] "
            src={img1}
            alt="illustration-sign-up-mobile"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
