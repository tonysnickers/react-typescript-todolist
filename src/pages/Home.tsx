import React, { useState } from "react";
import TodoList from "../components/TodoList";
import TypeInterface from "../model/typeInterface";

const Home = () => {
  const [todos, setTodos] = useState<TypeInterface[]>([])
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "90px"}}>
      <TodoList />
    </div>
  );
};

export default Home;
