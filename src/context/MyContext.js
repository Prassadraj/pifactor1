// context/MyContext.js
"use client";
import allData from "@/allData";
import { createContext } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const data = { allData: allData };

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

export default MyContext;
