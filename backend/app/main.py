from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from app.services.monitor import SystemMonitor
from app.schemas.monitor import SystemStatsResponse
import asyncio

app = FastAPI()
monitor = SystemMonitor()

@app.websocket("/ws")
async def get_stats(websocket: WebSocket):
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