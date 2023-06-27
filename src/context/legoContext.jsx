/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

export const LEGOContext = createContext();

export const LEGOProvider = ({ children }) => {
  const [legoData, setLegoData] = useState({});
  const [legoPrice, setLegoPrice] = useState({});

  const updateLegoData = (newData) => {
    setLegoData(newData);
  };

  const handleLegoPrice = (price) => {
    setLegoPrice(price);
  };

  const data = {
    legoData,
    legoPrice,
    updateLegoData,
    handleLegoPrice,
  };

  return <LEGOContext.Provider value={data}>{children}</LEGOContext.Provider>;
};
