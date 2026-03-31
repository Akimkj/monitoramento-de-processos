import psutil

def displayProcesses():
    '''
    ## Função de exibição dos processos
    Itera sobre todos os processos ativos e mostra o PID, status, nome e usuario que fazem referencia ao processo
    '''

    for p in psutil.process_iter(['pid', 'status', 'name', 'username']):
        try:
            info = p.info

            pid_str = f"PID: {info['pid']}"
            status_str = f"Status: {info['status']}"
            nome_str = f"Nome: {info['name']}"

            print(f"{pid_str:<20} {status_str:<25} {nome_str:<40} Username: {info['username']}")
        except:
            continue
    psutil.process_iter.cache_clear()
    print("\n\n")