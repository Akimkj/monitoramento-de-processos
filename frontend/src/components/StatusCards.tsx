import { CardsProps } from "../types/types";

export default function StatusCards({ label, valueMain, details, icon, color = 'cyan' }: CardsProps) {
  const themeClasses = {
    cyan: "border-cyan-500/30 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] shadow-cyan-500/10",
    fuchsia: "border-fuchsia-500/30 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(240,171,252,0.4)] shadow-fuchsia-500/10"
  };

  const barClasses = color === 'cyan' ? "bg-cyan-500" : "bg-fuchsia-500";

  return (
    <div className={`flex flex-col justify-between bg-slate-900/50 border-2 rounded-xl p-5 backdrop-blur-md shadow-lg transition-all duration-500 ${themeClasses[color]}`}>
      

      <div className="flex justify-between items-center mb-7">
        <span className="text-xs font-mono uppercase tracking-widest opacity-70">{label}</span>
        <div className="p-2 bg-slate-800 rounded-lg">
          {icon}
        </div>
      </div>

      
      <div className="flex justify-between flex-row mb-5 items-end">
        <div className="flex flex-row flex-wrap gap-4">
          {details && details.map((item, index) => (
            <div key={index} className="flex flex-row items-baseline gap-2">
              <h2 className="text-sm font-mono tracking-wider uppercase opacity-60">
                {item.name}
              </h2>
              <span className="font-bold text-lg opacity-100">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <h2 className="text-4xl font-mono font-bold tracking-tighter">
            {valueMain}
          </h2>
          {typeof valueMain === 'number' && <span className="text-sm opacity-50">%</span>}
        </div>
        <div className="w-full bg-slate-800 h-1.5 mt-6 rounded-full overflow-hidden border border-white/5">
          <div
            className={`h-full transition-all duration-1000 ease-out ${barClasses}`}
            style={{ width: `${valueMain}%` }}
          />
        </div>
      </div>
    </div>
  );
}