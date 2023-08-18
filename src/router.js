import App from "./App";
import ThanksPage from "./Component/mail";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route exact path="/signupform" element={<App />} />
      <Route path="/mail" element={<ThanksPage />} />
    </Routes>
  );
}
export default Router;
