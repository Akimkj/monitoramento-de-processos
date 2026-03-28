import psutil

def infosCPU():

    cpuUso = psutil.cpu_percent(interval=0.1)

    cpuLogicoQuant = psutil.cpu_count()
    if (cpuLogicoQuant is None):
        cpuLogicoQuant = "Erro ao carregar"

    cpuFisicoQuant = psutil.cpu_count(logical=False)
    if (cpuFisicoQuant is None):
        cpuFisicoQuant = "Erro ao carregar"

    #retorna o uso total da cpu, quantidade de núcleos lógicos e quantidade de núcleos físicos, respectivamente
    return (cpuUso, cpuLogicoQuant, cpuFisicoQuant)