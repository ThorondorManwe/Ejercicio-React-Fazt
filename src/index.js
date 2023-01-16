import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Post } from "./Posts";
import { Counter } from "./Counter";
import {Entrada} from  "./Entrada";


const root = ReactDOM.createRoot(document.getElementById("root"));

/* const handleChange = (e) => console.log(e.target.value); */

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user2",
  },
  {
    id: 2,
    name: "Hideo Kojima",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
      <Counter/>
      <Entrada/>
  </>
);
