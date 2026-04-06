'use client'
import { useState, useEffect } from "react";
import {propsStatsSystemMonitor} from '../types/types'


export function useWebSockets() {
    //Carrega os dados gerais do backend
    const [data, setData] = useState<propsStatsSystemMonitor | null>(null)
    //informa se esta conectado ou nao
    const [isConnected, setIsConnected] = useState<boolean>(false)
    //string que captura possiveis erros
    const [error, setError] = useState<string>("")

    useEffect(() => {
        const ws = new WebSocket('ws://127.0.0.1:8000/ws');

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

    }, [])

    return {data, isConnected, error}
}