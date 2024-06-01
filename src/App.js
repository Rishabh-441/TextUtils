import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, status) => {
    setAlert({
      message: message,
      status: status,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#006C93";
      showAlert("Dark Mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "Success");
    }
  };
  return (
    <>
    <Router>
    <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        onToggle={toggleMode}
        showAlert={showAlert}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route exact path="/" element={
            <div className="container">
            <TextForm
              heading="Enter text to analyze"
              mode={mode}
              showAlert={showAlert}
            ></TextForm>
          </div>
        }></Route>
        <Route exact path="/about" element={
          <About mode={mode}></About>
        }></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;