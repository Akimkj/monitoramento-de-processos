'use client'
import StatusCards from "../components/StatusCards";
import { Cpu, Zap, MemoryStick } from 'lucide-react';
import { useWebSockets } from "../hooks/useWebSocket";
import { convertBytes } from "../utils/convertMemory";
import { useMemo } from "react";

export default function Home() {
    const { data , isConnected, error } = useWebSockets()


    const topMemoryProcesses = useMemo(() => {
        if (!data?.processes) {
            return []
        }
        return data?.processes.sort((a,b) => b.memory_usage - a.memory_usage).slice(0,15)
    }, [data?.processes])

    if (!isConnected) {
        return (
            <div className="fixed flex justify-center items-center z-50 top-[50%] left-[50%] -translate-[50%] rounded-md bg-black p-10 opacity-90 backdrop-blur-md">
                <span className="text-yellow-400 font-bold tracking-widest text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Conectando ao servidor...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div className="fixed flex justify-center items-center z-50 top-[50%] left-[50%] -translate-[50%] rounded-md bg-black p-10 opacity-90 backdrop-blur-md">
                <span className="text-red-500 font-bold tracking-widest text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">Erro ao manter conexão com servidor</span>
            </div>
        );
    }

    const INFOSGERAIS = [
        {
            label: "Power CPU",
            icon: <Cpu size={28}/>,
            color: "cyan" as "cyan" | "fuchsia",
            valueMain: data?.cpu.porcentagem,
            details: [
                {
                    name: "Threads: ",
                    value: data?.cpu.threads,
                },
                {
                    name: "Core's: ",
                    value: data?.cpu.cores,
                }
            ]
        },
        {
            label: "Memory",
            icon: <MemoryStick size={28}/>,
            color: "cyan" as "cyan" | "fuchsia",
            valueMain: data?.memory.porcentagem,
            details: [
                {
                    name: "Total: ",
                    value: convertBytes(data?.memory.total),
                },
                {
                    name: "Usado: ",
                    value: convertBytes(data?.memory.usado),
                },
                {
                    name: "Disponível: ",
                    value: convertBytes(data?.memory.disponivel),
                }
            ]
        },
        {
            label: "Battery",
            icon: <Zap size={28}/>,
            color: "fuchsia" as "cyan" | "fuchsia",
            valueMain: data?.battery.porcentagem,
            details: [
                {
                    name: "Status: ",
                    value: data?.battery.status,
                },
            ]
        }
    ]

    
    return (
        <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {INFOSGERAIS.map((datas) => (
                    <StatusCards
                        key={datas.label}
                        label={datas.label}
                        icon={datas.icon}
                        color={datas.color}
                        valueMain={datas.valueMain}
                        details={datas.details}
                    />
                ))}
            </div>
            <div className="flex flex-col gap-8 p-10 w-full border-1 rounded-lg">
                <div className="flex flex-col mb-6 border-l-4 border-fuchsia-500 pl-4">
                    <h2 className="text-xl font-mono font-bold tracking-tighter uppercase text-white">
                        Processos Críticos <span className="text-fuchsia-400 text-sm opacity-50">[RAM]</span>
                    </h2>
                    <p className="text-xs font-mono opacity-50 uppercase tracking-widest">
                        Monitorando os 15 maiores consumidores de memória
                    </p>
                </div>
                {topMemoryProcesses && topMemoryProcesses?.map((proc) =>(
                    <div key={proc.pid} className="flex flex-row justify-between items-center p-5 bg-slate-900 rounded-md">
                        <div className="flex md:flex-row flex-col gap-5 items-center">
                            <span className="text-sm font-mono text-slate-300">PID: {proc.pid} |</span>
                            <span className="text-sm font-mono text-slate-300">NOME: {proc.name} |</span>
                            <span className="text-sm font-mono text-slate-300">STATUS: {proc.status} |</span>
                            <span className="text-sm font-mono text-slate-300">CPU Usage: {proc.cpu_percent} % |</span>
                            <span className="text-sm font-mono text-slate-300">Memory Usage: <span className="font-bold">{convertBytes(proc.memory_usage)}</span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
