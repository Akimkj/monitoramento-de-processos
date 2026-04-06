'use client'
import { useState, useEffect, createContext, ReactNode, useContext } from "react";
import {propsStatsSystemMonitor, WebSocketContextType} from '../types/types'

const WebSocketContext = createContext<WebSocketContextType | null>(null)

export const WebSocketsProvider = ({children}: { children: ReactNode}) => {
    //Carrega os dados gerais do backend
    const [data, setData] = useState<propsStatsSystemMonitor | null>(null)
    //informa se esta conectado ou nao
    const [isConnected, setIsConnected] = useState<boolean>(false)
    //string que captura possiveis erros
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000/ws');

        ws.onopen = () => {
            setIsConnected(true)
            setError("")
        }

        ws.onmessage = (event) => {
            const newdata = JSON.parse(event.data) as propsStatsSystemMonitor
            setData(newdata)
        }

        ws.onerror = (error) => {
            setError("erro no servidor WebSocket")
            console.log(error)
        }

        ws.onclose = () => {
            setIsConnected(false)
        }

        return () => {
            ws.close()
        }

    }, []);

    return (
        <WebSocketContext.Provider value={{data, isConnected, error}}>
            {children}
        </WebSocketContext.Provider>
    )
}

export const useSystemData = () => {
    const context = useContext(WebSocketContext)
    if (!context) {
        throw new Error("Falha na obtenção dos dados");
    }
    return context
}