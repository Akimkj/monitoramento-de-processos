import psutil
from src.utils import convertBytes, convertTime

def infoProcess(pid: int):
    '''
    ## Função de dados de um processo específico
    Recebe um pid, se não existir um processo com o pid recebido, retorna None, senão retorna o nome, status, memoria ocupada, uso da cpu em % e o tempo de execução, respectivamente
    '''

    if (not psutil.pid_exists(pid)):
        return None
    
    process = psutil.Process(pid)

    memory = convertBytes(process.memory_info().rss)
    cpuCount = psutil.cpu_count()
    if (cpuCount is None):
        cpuUso = "Não foi possível calcular"
    else:
        cpuUso = process.cpu_percent(interval=0.2) / cpuCount

    timeProcess = convertTime(sum(process.cpu_times()[:2]))

    return (process.name(), process.status(), memory, cpuUso, timeProcess)

