import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();
  return(
    <div>
      { isAuthenticated
        ? <LogoutBtn />
        : <LoginBtn />
      }
    </div>
  );
}

export default App;