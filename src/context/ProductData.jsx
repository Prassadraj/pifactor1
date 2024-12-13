'use client'
import React, { createContext } from "react";
import allData from "../allData";

export const ProductDataContext = createContext();

function ProductDataProvider({ children }) {
  const contextValue = { data: allData };

  return (
    <ProductDataContext.Provider value={contextValue}>
      {children}
    </ProductDataContext.Provider>
  );
}

export default ProductDataProvider;