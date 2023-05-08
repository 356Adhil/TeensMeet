import RegistrationForm from "./components/RegistrationForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <RegistrationForm />
    </div>
  );
}

export default App;
