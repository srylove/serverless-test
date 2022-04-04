import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [test,setTest] = useState('')
  useEffect(() => {
      axios
        .get("/api/api/test")
        .then(function (response) {
          console.log(response);
          setTest(JSON.stringify(response.data) )
        })
        .catch(function (error) {
          console.log(error);
        });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {test}
          <br/>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
