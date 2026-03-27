import psutil,time


while (True):

    cpuUso = psutil.cpu_percent(interval=0.1) #uso da cpu em todo sistema
    cpuLogicoQuant = psutil.cpu_count() # quant de núcles lógicos da CPU
    cpuFisicoQuant = psutil.cpu_count(logical=False) #quant de núcleos físicos da CPU

    
    time.sleep(2)