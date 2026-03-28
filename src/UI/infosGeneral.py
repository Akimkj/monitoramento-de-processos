from src.Components.cpu import infosCPU
from src.Components.memory import infosMemory
from src.Components.energy import infosEnergy

def displayInfosGeneral():
    cpuTotal, cpuLogico, cpuFisico = infosCPU()
    memoriaTotal, memoriaLivre, memoriaUsadaPercent, memoriaUsada = infosMemory()
    bateriaPercent, bateriaConectada = infosEnergy()
    
    print("\n\n")
    print("===== INFORMAÇÕES GERAIS DO COMPUTADOR ===== ")

    print("# PROCESSADOR")
    print(f"Uso total da CPU: {cpuTotal}% {" ":<10}Quantidade de CPU's lógicos: {cpuLogico} {" ":<10}Quantidade de núcleos da CPU: {cpuFisico}")

    print("# MEMÓRIA")
    print(f"Total: {memoriaTotal} {" ":<20} Livre: {memoriaLivre}")
    print(f"Usada: {memoriaUsada} ({memoriaUsadaPercent} %)")

    print("# BATERIA")
    print(f"Status: {bateriaConectada} {" ":<10} Porcentagem: {bateriaPercent} %")

    print("\n\n")
    