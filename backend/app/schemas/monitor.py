from pydantic import BaseModel, Field
from typing import List

class CPUSchema(BaseModel):
    porcentagem: float = Field(ge=0, le=100)
    threads: int
    cores: int

class MemorySchema(BaseModel):
    total: int
    disponivel: int
    usado: int
    porcentagem: float = Field(ge=0, le=100)

class BatterySchema(BaseModel):
    porcentagem: int
    status: str

class ProcessBaseSchema(BaseModel):
    pid: int
    name: str
    status: str
    memory_usage: int
    cpu_percent: float
    

class SystemStatsResponse(BaseModel):
    cpu: CPUSchema
    memory: MemorySchema
    battery: BatterySchema
    processes: List[ProcessBaseSchema]