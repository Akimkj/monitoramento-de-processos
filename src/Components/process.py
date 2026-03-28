import psutil
from src.utils import convertBytes, convertTime

def infoProcess(pid: int):
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

