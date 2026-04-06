import { JSX } from "react"

export interface CardsProps {
    label: string,
    valueMain: number | undefined,
    details?: {
        name: string;
        value: string | number | undefined;
    }[],
    icon: JSX.Element,
    color?: 'cyan' | 'fuchsia',
}

export interface WebSocketContextType {
    data: propsStatsSystemMonitor | null,
    isConnected: boolean,
    error: string,
}

export interface propsStatsSystemMonitor {
    cpu: {
        porcentagem: number,
        threads: number,
        cores: number,
    },
    memory: {
        total: number,
        disponivel: number,
        usado: number,
        porcentagem: number,
    },
    battery: {
        porcentagem: number,
        status: string,
    },
    processes: ProcesseBase[],
}

export interface ProcesseBase {
    pid: number,
    name: string,
    status: string,
    memory_usage: number,
    cpu_percent: number,
}