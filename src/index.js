import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";


const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => console.log(e.target.value);

root.render(
  <>
    <TaskCard ready={true}/>
    <Button text="El botón" />

    <input onChange={handleChange}/>
  </>
);
