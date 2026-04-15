'use client'
import { useState } from 'react';
import { Menu, X, Activity, Cpu } from 'lucide-react';
import { useSystemData } from '../provider/WebSocketContext';
import Link from 'next/link';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const {isConnected} = useSystemData()

    const navLinks = [
    { name: 'Dashboard', icon: <Activity size={18} />, href: '/' },
    { name: 'Processos', icon: <Cpu size={18} />, href: '/Processos' },
    ];

    return (
        <header className="bg-slate-900 h-30 flex items-center justify-between p-4">
             <h1 className="text-fuchsia-300 font-bold tracking-widest text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">SystemPulse</h1>


            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-mono text-slate-300  transition-all duration-300 ${!isConnected ? `opacity-50 cursor-not-allowed pointer-events-none`: `hover:text-cyan-400 hover:bg-slate-800`}`}
                        
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
                </div>
            </div>

            <div className="md:hidden flex items-center">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="inline-flex items-center justify-center p-2 cursor-pointer"
                >
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden fixed top-30 h-full w-50 right-0 bg-slate-900 border-b border-cyan-500/30 animate-in  slide-in-from-top duration-300 z-1">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-3 px-3 py-4 rounded-md text-base font-mono text-slate-300 hover:text-fuchsia-400 hover:bg-slate-800 border-l-2 border-transparent hover:border-fuchsia-500 transition-all"
                            onClick={() => {
                                setMenuOpen(!menuOpen)
                            }}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}