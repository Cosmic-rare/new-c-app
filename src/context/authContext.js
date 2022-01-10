import { createContext, useState, useContext, useEffect } from "react"
import axios from "../plugins/axios"

const AuthContext = createContext()

export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [loading, setLoading] = useState(true)

  const value = {
    token,
  }

  useEffect(() => {
    setInterval(() => {
      setToken(localStorage.getItem("token"))
    })
    setLoading(false)
  }, [])

  if (loading) {
    return <div />
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}