import psutil
from src.Components.process import infoProcess

def displayProcess(pid: int):
    process = infoProcess(pid)
    if (process is not None):
        nome, status, memoria, cpuPercent, timeUso = process

        print(f"\n{f"Nome: {nome}":<35} {f"Status: {status}":<20} {f"Memoria: {memoria}":<20} {f"Uso CPU: {cpuPercent:.2f} %":<20} Tempo execução: {timeUso}\n")
    else:
        print("\nProcesso inexistente ou encerrao\n")
