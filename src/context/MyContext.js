// context/MyContext.js
"use client";
import allData from "@/allData";
import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const allItems = { data: allData };

  return (
    <MyContext.Provider value={{ allItems }}>{children}</MyContext.Provider>
  );
};

export default MyContext;
