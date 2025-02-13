"use client";
import allData from "@/allData";
import { createContext, useEffect, useMemo, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const data = useMemo(() => ({ allData }), []); // Memoized data object
  const [nav, setNav] = useState("vfx");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <MyContext.Provider
      value={{ data, nav, setNav, mousePosition, isActive, setIsActive }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
