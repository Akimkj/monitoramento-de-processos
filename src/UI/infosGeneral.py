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
    print(f"{f"Uso total da CPU: {cpuTotal} %":<35} {f"Quantidade de CPU's lógicos: {cpuLogico}":<35} Quantidade de núcleos da CPU: {cpuFisico}")

    print("\n# MEMÓRIA")
    print(f"Total: {memoriaTotal:<28} Livre: {memoriaLivre:<28} Usada: {memoriaUsada} ({memoriaUsadaPercent} %)")

    print("\n# BATERIA")
    print(f"Status: {bateriaConectada} {" ":<10} Porcentagem: {bateriaPercent} %")

    print("\n\n")
    