import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ThanksPage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const successIcon = require("../Component/Images/icon-success.svg");
  function previousPage(event) {
    event.preventDefault();
    navigate("/signupform", {});
  }
  return (
    <div className="h-screen bg-DarkSlateGrey overflow-hidden max-sm:overflow-hidden max-sm:bg-white">
      <div className="border mx-auto my-48 w-[380px] h-fit lg:p-6 bg-white rounded-xl pb-9 max-sm:my-0 max-sm:w-[340px] max-sm:h-screen max-sm:mt-36 max-sm:border-none">
        <img className="w-12 " src={successIcon.default} alt="icon"></img>
        <h1 className="font-[700] text-4xl mt-5"> Thanks for subscribing!</h1>
        <p className="mt-5 text-left">
          {" "}
          A confirmation email has been sent to <b>{location.state}. </b>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <div className="">
          <button
            className="w-[330px] h-[50px]  border rounded-md mt-8  border-none outline-none  bg-DarkSlateGrey text-white hover:bg-gradient-to-r from-[#f43f5e] to-Tomato font-[500] max-sm:mt-48"
            onClick={previousPage}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
