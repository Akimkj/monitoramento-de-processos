

def menu():
    opc = -1
    while (opc > 3 or opc < 1):
        print("1- Consultar informações gerais do hardware e do Sistema Operacional")
        print("2 - Listar processos em execução")
        print("3 - Consultar um processo por seu PID")
        print("0 - Sair")
        try:
            opc = int(input("Opção: "))
            if (opc > 3 or opc < 1):
                print("\n====> Valor precisa ser entre 1 e 3\n")
                continue
        except:
            print("\n====> Valor inválido!\n")
            continue
    return opc
    
print(menu())