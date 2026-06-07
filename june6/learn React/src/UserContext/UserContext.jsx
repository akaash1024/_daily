import { createContext, useContext, useState } from "react"

const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
    const [mode, setMode] = useState("light")

    const toggleMode = () => {
        setMode(pre => pre === 'light' ? 'dark' : 'light')
    }

    return (
        <UserContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(useContext)