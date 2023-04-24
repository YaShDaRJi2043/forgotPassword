import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Sendemail from "./components/Sendemail";
import Forgotpassword from "./components/Forgotpassword";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import { createContext, useState } from "react";

export const dataContext = createContext();

function App() {
  const [info, setInfo] = useState(false);

  return (
    <>
      <dataContext.Provider value={{ info, setInfo }}>
        <div>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/sendemail" element={<Sendemail />} />
              <Route
                path="/forgotpassword/:id/:token"
                element={<Forgotpassword />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </>
        </div>
      </dataContext.Provider>
    </>
  );
}

export default App;
