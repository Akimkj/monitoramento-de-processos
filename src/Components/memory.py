import psutil
from src.utils import convertBytes

def infosMemory():
    mem = psutil.virtual_memory()

    memTotal = convertBytes(mem.total) #total de memoria
    memDisponivel = convertBytes(mem.available) #memoria disponivel
    memUsadoPercent = mem.percent #memoria usada em %
    memUsado = convertBytes(mem.used) #memoria usada

    return (memTotal, memDisponivel, memUsadoPercent, memUsado)


