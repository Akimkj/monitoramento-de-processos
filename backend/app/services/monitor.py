import psutil

class SystemMonitor:
    '''
    ## Classe SystemMonitor
    Classe principal que é responsável pela coleta de todos os dados solicitados pela aplicação.  

    ### Métodos:
    * **getInfoCPU** -> Retorna um objeto contendo a porcentagem de uso da CPU, a quantidade de threads e core's da CPU.
    * **getInfoMemory** -> Retorna um objeto com os dados da mémoria do Sistema, respectivamente: Total de memória, memória disponível, e memória usada (todas em Bytes) e a porcentagem da memória usada.
    * **getInfoBattery** -> Retorna um objeto contendo a porcentagem da bateria e o status da bateria.
    * **getProcesses** -> Retorna uma lista contendo todos os processos listados no SO, contendo as informações: pid, nome, status, memória ocupada e uso da CPU em %.
    '''
    def getInfoCPU(self):
        cpuUso = psutil.cpu_percent(interval=1)
        cpuLogicoQuant = psutil.cpu_count()
        cpuFisicoQuant = psutil.cpu_count(logical=False)
        
        return {
            "porcentagem": cpuUso,
            "threads": cpuLogicoQuant or 1,
            "cores": cpuFisicoQuant or 1, 
        }
    
    def getInfoMemory(self):
        mem = psutil.virtual_memory()

        return {
            "total": mem.total, #total de memoria
            "disponivel": mem.available, #memoria disponivel
            "usado": mem.used, #memoria usada
            "porcentagem": mem.percent, #memoria usada em %
        }
    
    def getInfoBattery(self):
        bateria = psutil.sensors_battery()

        if (bateria is None):
            return {
                "porcentagem": 100,
                "status": "AC Power (Nenhuma Bateria Detectada)" 
            }
        
        return {
            "porcentagem": bateria.percent,
            "status": "Conectada" if bateria.power_plugged else "Desconectada", 
        }
    
    def getProcesses(self):
        processes = []

        for proc in psutil.process_iter(['pid', 'name', 'status', 'memory_info', 'cpu_percent']):
            try:
                p = proc.info

                p['memory_usage'] = p['memory_info'].rss

                processes.append(p)
            except (psutil.NoSuchProcess, psutil.AccessDenied):
                continue
        
        return processes
