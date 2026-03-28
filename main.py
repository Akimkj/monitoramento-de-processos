from src.utils import menu
from src.UI.infosGeneral import displayInfosGeneral
from src.UI.infoProcesses import displayProcesses
from src.UI.processeSpecific import displayProcess

#Laço principal do programa
while (True):

    opc = menu()

    if (opc == 1):
        displayInfosGeneral()
    elif (opc == 2):
        displayProcesses()
    elif (opc == 3):
        pid = int(input("Digite o PID a procurar: "))
        displayProcess(pid)
    elif (opc == 0):
        break