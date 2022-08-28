import { createContext } from "react";
import React,{useState} from 'react'

export const AppContext=createContext();


export const AppContextProvider = ({children}) => {
const [userData, setUserData] = useState([])

const value={userData, setUserData}
    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
  )
}
