# 📊 Monitoramento de Processos (System Monitor)
Este trabalho implementa um programa capaz de coletar e exibir informações do computador em que ele está sendo executado, funcionando como uma pequena ferramenta de diagnóstico e monitoramento do sistema operacional. O programa é referente a nota parcial da disciplina Sistemas Operacionais na Universidade Federal do Maranhão (UFMA).

## Tecnologias Utilizadas
* BackEnd: Python, FastAPI, Psutil.  
* FrontEnd: TypeScript, React, Next.js, Tailwind CSS
* Comunicação: WebSocket (Full-Duplex)

## Como executar

* Pre-requisitos: Python 3.10 ou superior instalado.

* Clone o repositorio: ```git clone https://github.com/Akimkj/monitoramento-de-processos.git```

### 1. Preparando o BackEnd:  
Na pasta "backend", abra o terminal e siga o passo a passo:

1.1 Criar o ambiente virtual: ```python -m venv venv```  
1.2 Ativar o ambiente virtual:   
* Linux/MacOS: ```source venv/bin/activate```
* Windows: ```.\venv\Scripts\activate```  

1.3 Instalar as dependências: ```pip install -r requirements.txt```  
1.4 Iniciar o servidor: ```uvicorn main:app --reload```

### 2. Preparando o FrontEnd:
Na pasta "frontend", abra o terminal e siga o passo a passo:

1.1 Instalar dependências: ```pnpm install```  
1.2 Iniciar a aplicação: ```pnpm run dev```

## Autores

Discente: MIKA MARQUES MARQUES DOS SANTOS JÚNIOR  
Professora Responsável: ALANA DE ARAUJO OLIVEIRA MEIRELES TEIXEIRA
