import React, {createContext, useContext} from "react";
import {SwapiService} from "@/services";

const SwapiContext = createContext()

export const SwapiServiceProvider = ({ children }) => {
  const swapi = new SwapiService()

  return <SwapiContext.Provider value={swapi}>{children}</SwapiContext.Provider>
}

export const useSwapi = () => useContext(SwapiContext)