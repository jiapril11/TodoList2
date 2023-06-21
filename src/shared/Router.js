import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoApp from "../pages/TodoApp";
import Todo from "../pages/Todo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
