
def menu():
    '''
        ## Função de menu
        Responsavel pela exibição das opções de interação do usuário\n
        **Retorna a opção escolhida pelo usuário via teclado**
    '''
    opc = -1
    while (opc > 3 or opc < 0):
        print("1- Consultar informações gerais do hardware e do Sistema Operacional")
        print("2 - Listar processos em execução")
        print("3 - Consultar um processo por seu PID")
        print("0 - Sair")
        try:
            opc = int(input("Opção: "))
            if (opc > 3 or opc < 0):
                print("\n====> Valor precisa ser entre 0 e 3\n")
                continue
        except:
            print("\n====> Valor inválido!\n")
            continue
    return opc

def convertBytes(memory: int):
    '''
        ## Função de conversão de memória
        Recebe um valor **memory** representado em Bytes, e converte esse valor em MB, ou em GB caso necessário\n
        **Retorna uma string contendo o novo valor e indicação da memória**
    '''
    memMB = memory / (1024 ** 2)

    if (memMB >= 1024):
        memGB = memMB / 1024
        return f"{memGB:.3f} GB"
    return f"{memMB:.3f} MB"

def convertTime(timeseg: float):
    '''
        ## Função de conversão de tempo
        Recebe um valor **timeseg** representando o tempo em segundos, e converte esse valor em minutos, ou em horas caso necessário\n
        **Retorna uma string contendo o novo valor e indicação do tempo**
    '''

    if (timeseg < 60):
        return f"{timeseg:.2f} s"
    else:
        timeMin = timeseg / 60
    
    if (timeMin > 60):
        timeHrs = timeMin / 60
        return f"{timeHrs:.2f} hrs"
    
    return f"{timeMin:.2f} min"