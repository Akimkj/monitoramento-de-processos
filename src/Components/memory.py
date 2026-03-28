import psutil

def infosMemory():
    mem = psutil.virtual_memory()

    memTotal = convertBytes(mem.total) #total de memoria
    memDisponivel = convertBytes(mem.available) #memoria disponivel
    memUsadoPercent = mem.percent #memoria usada em %
    memUsado = convertBytes(mem.used) #memoria usada

    return (memTotal, memDisponivel, memUsadoPercent, memUsado)


def convertBytes(memory: int):
    memMB = memory / (1024 ** 2)

    if (memMB >= 1024):
        memGB = memMB / 1024
        return f"{memGB:.3f} GB"
    return f"{memMB:.3f} MB"