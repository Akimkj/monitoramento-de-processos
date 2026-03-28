import psutil
from src.utils import convertBytes

def infosMemory():
    '''
    ## Funcção de informações da memória
    retorna a quantidade de memória total (em str), quantidade de memoria disponível (em str), percentual de memória usada (float) e quantidade de memoria usada (em str), respectivamente
    '''
    
    mem = psutil.virtual_memory()

    memTotal = convertBytes(mem.total) #total de memoria
    memDisponivel = convertBytes(mem.available) #memoria disponivel
    memUsadoPercent = mem.percent #memoria usada em %
    memUsado = convertBytes(mem.used) #memoria usada

    return (memTotal, memDisponivel, memUsadoPercent, memUsado)


