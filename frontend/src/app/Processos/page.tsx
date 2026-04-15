'use client'
import { useSystemData } from "@/src/provider/WebSocketContext";
import { ProcesseBase } from "@/src/types/types";
import { useMemo, useState } from "react";
import { convertBytes } from "@/src/utils/convertMemory";
import {ArrowDown01, Cpu, MemoryStick} from "lucide-react"

export default function Processos() {
    const { data , isConnected, error } = useSystemData();
    const [searchPid, setSearchPid] = useState("");
    const [selected, setSelected] = useState<"1" | "2" | "3">("1")

    const filteredProcesses = useMemo(() => {
        if (!data?.processes) {
            return []
        }

        if (!searchPid){
            return [...data.processes];
        }

        return data.processes.filter((proc: ProcesseBase) => {
            return proc.pid.toString().includes(searchPid)
        });
    }, [data?.processes, searchPid])

    const sortProcesses = useMemo(() => {
        if (!filteredProcesses) {
            return []
        }

        switch (selected) {
            case "1":
                return filteredProcesses.sort((a,b) => a.pid - b.pid)
            case "2":
                return filteredProcesses.sort((a,b) => b.cpu_percent - a.cpu_percent)
            case "3":
                return filteredProcesses.sort((a,b) => b.memory_usage - a.memory_usage)
            default:
                return [...filteredProcesses]
        }
    }, [filteredProcesses, selected])

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

    return (
        <div className="flex flex-col p-10 w-full">
            <input 
                type="text"
                inputMode="numeric"
                placeholder="Digite o PID do processo"
                className=" mb-10 bg-black/40 border border-white/10 p-2 rounded font-mono text-sm focus:border-cyan-500 outline-none transition-all w-100"
                value={searchPid}
                onChange={(e) => {setSearchPid(e.target.value.replace(/\D/g, ""))}}
            />
            <div className="flex flex-col gap-10 p-10 border-1 border-fuchsia-500/30 rounded-sm drop-shadow-[0_0_8px_rgba(240,171,252,0.4)]">
                <h2 className="text-xl font-mono font-bold tracking-tighter uppercase text-white border-l-4 border-fuchsia-500 pl-5">
                    Processos
                </h2>
                <div className="flex flex-row items-center gap-5">
                    <span className="text-md font-mono font-bold tracking-tight">Ordenar por: </span>
                    <button 
                        className={`flex flex-row gap-2 rounded-full px-9 py-2 font-bold cursor-pointer text-white ${selected === "1" ? "bg-cyan-500/80 border-cyan-500/30 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] shadow-cyan-500/10" : "bg-fuchsia-500/30 border-fuchsia-500/30 drop-shadow-[0_0_8px_rgba(240,171,252,0.4)] shadow-fuchsia-500/10"}`}
                        onClick={() => {
                            setSelected("1")
                        }}
                    >
                        <ArrowDown01/> PID
                    </button>
                    <button 
                        className={`flex flex-row gap-2 rounded-full px-9 py-2 font-bold cursor-pointer text-white ${selected === "2" ? "bg-cyan-500/80 border-cyan-500/30 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] shadow-cyan-500/10" : "bg-fuchsia-500/30 border-fuchsia-500/30 drop-shadow-[0_0_8px_rgba(240,171,252,0.4)] shadow-fuchsia-500/10"}`}
                        onClick={() => {
                            setSelected("2")
                        }}
                    >
                        <Cpu/> CPU Usage
                    </button>
                    <button 
                        className={`flex flex-row gap-2 rounded-full px-9 py-2 font-bold cursor-pointer text-white ${selected === "3" ? "bg-cyan-500/80 border-cyan-500/30 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] shadow-cyan-500/10" : "bg-fuchsia-500/30 border-fuchsia-500/30 drop-shadow-[0_0_8px_rgba(240,171,252,0.4)] shadow-fuchsia-500/10"}`}
                        onClick={() => {
                            setSelected("3")
                        }}
                    >
                        <MemoryStick/> Memory Usage
                    </button>
                </div>
                {sortProcesses && sortProcesses?.map((proc) =>(
                    <div key={proc.pid} className="flex flex-row justify-between items-center p-5 bg-slate-900 rounded-md ">
                        <div className="flex md:flex-row flex-col gap-5 items-center">
                            <span className="text-sm font-mono text-slate-300">PID: {proc.pid}</span>|
                            <span className="text-sm font-mono text-slate-300">NOME: {proc.name}</span>|
                            <span className="text-sm font-mono text-slate-300">STATUS: {proc.status}</span>|
                            <span className="text-sm font-mono text-slate-300">CPU Usage: {proc.cpu_percent} %</span>|
                            <span className="text-sm font-mono text-slate-300">Memory Usage: <span className="font-bold ">{convertBytes(proc.memory_usage)}</span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}