import psutil

def infosEnergy():
    '''
    ## Função de informações da bateria
    Retorna uma tupla contento a porcentagem da bateria e o Status dela OU uma tupla de string "Não foi possível determinar" caso falhe.
    '''
    bateria = psutil.sensors_battery() #informações gerais da bateria
    if (bateria is None):
        return ("Não foi possível determinar", "Não foi possível determinar")

    bateriaPercent = bateria.percent #porcentagem da bateria restante

    bateriaConectada = bateria.power_plugged #booleano se esta conectado a energia
    if (bateriaConectada):
        bateriaConectada = "Conectada"
    else:
        bateriaConectada = "Desconectada"

    return (bateriaPercent, bateriaConectada)