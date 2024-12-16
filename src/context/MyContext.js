// context/MyContext.js
"use client";
import allData from "@/allData";
import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const data = { allData: allData };
  const [nav, setNav] = useState("vfx");

  return (
    <MyContext.Provider value={{ data, nav, setNav }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
