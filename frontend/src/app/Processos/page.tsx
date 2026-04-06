'use client'
import { useWebSockets } from "@/src/hooks/useWebSocket"
import { ProcesseBase } from "@/src/types/types";
import { useMemo, useState } from "react";
import { convertBytes } from "@/src/utils/convertMemory";

export default function Processos() {
    const { data , isConnected, error } = useWebSockets();
    const [searchPid, setSearchPid] = useState("");

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
                {filteredProcesses && filteredProcesses?.map((proc) =>(
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