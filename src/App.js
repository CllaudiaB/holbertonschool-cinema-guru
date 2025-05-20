import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios({
      method: "post",
      url: "http://localhost:8000/api/auth/",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        setIsLoggedIn(true);
        setUserName(response.data.username);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
    </div>
  );
}

export default App;
