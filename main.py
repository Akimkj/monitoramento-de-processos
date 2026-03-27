import psutil,time
from src.utils import menu


while (True):

    opc = menu()

    if (opc == 1):
        print()
    elif (opc == 2):
        print()
    elif (opc == 3):
        print()
    elif (opc == 0):
        break

    cpuUso = psutil.cpu_percent(interval=0.1) #uso da cpu em todo sistema
    cpuLogicoQuant = psutil.cpu_count() # quant de núcles lógicos da CPU
    cpuFisicoQuant = psutil.cpu_count(logical=False) #quant de núcleos físicos da CPU

    mem = psutil.virtual_memory() #pega infos da memoria
    memTotal = mem.total #total de memoria
    memDisponivel = mem.available #memoria disponivel
    memUsadoPercent = mem.percent #memoria usada em %
    memUsado = mem.used #memoria usada


    bateria = psutil.sensors_battery() #infos da bateria
    bateriaPercent = bateria.percent #porcentagem da bateria
    bateriaConectada = bateria.power_plugged #bool se esta conectado a energia
    

    time.sleep(2)