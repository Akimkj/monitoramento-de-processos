import psutil

def infosCPU():
    '''
    ## Funcção de informações da CPU
    retorna uma tupla contento o percentual de uso total da CPU, quantidade de núcleos lógicos e quantidade de núcleos físicos da CPU, respectivamente. 
    '''
    cpuUso = psutil.cpu_percent(interval=0.1)

    cpuLogicoQuant = psutil.cpu_count()
    if (cpuLogicoQuant is None):
        cpuLogicoQuant = "Erro ao carregar"

    cpuFisicoQuant = psutil.cpu_count(logical=False)
    if (cpuFisicoQuant is None):
        cpuFisicoQuant = "Erro ao carregar"

    return (cpuUso, cpuLogicoQuant, cpuFisicoQuant)