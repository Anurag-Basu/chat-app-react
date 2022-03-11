import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Chats } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="chat/:userId" element={<Chats />} />
      </Route>
    </Routes>
  );
};

export default App;
