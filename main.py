from src.utils import menu
from src.UI.infosGeneral import displayInfosGeneral

while (True):

    opc = menu()

    if (opc == 1):
        displayInfosGeneral()
    elif (opc == 2):
        print()
    elif (opc == 3):
        print()
    elif (opc == 0):
        break