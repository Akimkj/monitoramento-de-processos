from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from app.services.monitor import SystemMonitor
from app.schemas.monitor import SystemStatsResponse
import asyncio

app = FastAPI()
monitor = SystemMonitor()

@app.websocket("/ws")
async def get_stats(websocket: WebSocket):
    '''
    ## Function get_stats 
    * Recebe um objeto websocket, e é responsável por abrir e manter o canal de conexão de dados por meio da biblioteca **FastAPI**, com a funcionalidade **WebSocket**.  

    * Cria um objeto contendo os dados da CPU, Memória, Bateria e os Processos listados pelo SO. Formata em JSON e envia para o canal do WebSocket, atualizando os dados a cada segundo.
    '''
    await websocket.accept()
    while True:
        try:
            rawData = {
                "cpu": monitor.getInfoCPU(),
                "memory": monitor.getInfoMemory(),
                "battery": monitor.getInfoBattery(),
                "processes": monitor.getProcesses(),
            }

            newData = SystemStatsResponse.model_validate(rawData)
            jsonData = newData.model_dump_json()

            await websocket.send_text(jsonData)
            await asyncio.sleep(1)
        except WebSocketDisconnect:
            break
        except Exception as e:
            print(f"Erro inesperado: {e}")
            await asyncio.sleep(5)