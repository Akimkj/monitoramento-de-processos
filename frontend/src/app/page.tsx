'use client'
import StatusCards from "../components/StatusCards";
import { Cpu, Zap, MemoryStick } from 'lucide-react';
import { useSystemData } from "../provider/WebSocketContext";
import { convertBytes } from "../utils/convertMemory";

export default function Home() {
    const { data , isConnected, error } = useSystemData()

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
        </div>
    );
}
