# 📊 Monitoramento de Processos (System Monitor)
Este trabalho implementa um programa capaz de coletar e exibir informações do computador em que ele está sendo executado, funcionando como uma pequena ferramenta de diagnóstico e monitoramento do sistema operacional. O programa é referente a nota parcial da disciplina Sistemas Operacionais na Universidade Federal do Maranhão (UFMA).

## Tecnologias Utilizadas
* BackEnd: Python, FastAPI, Psutil.  
* FrontEnd: TypeScript, React, Next.js, Tailwind CSS
* Comunicação: WebSocket (Full-Duplex)

## Como executar

* Pre-requisitos: 
1. Python 3.10 ou superior instalado.
2. Node.js e pnpm instalados.

* Clone o repositorio: ```git clone https://github.com/Akimkj/monitoramento-de-processos.git```

### 1. Preparando o BackEnd:  
Na pasta "backend", abra o terminal e siga o passo a passo:

1.1 Criar o ambiente virtual: ```python3 -m venv venv```  
**OBS:**  Em ambientes Debian/Ubuntu, é necessário instalar o pacote python3-venv com o comando: ```apt install python3.12-venv```  

1.2 Ativar o ambiente virtual:   
* Linux/MacOS: ```source venv/bin/activate```
* Windows: ```.\venv\Scripts\activate```

1.3 Instalar as dependências: ```pip install -r requirements.txt```  
1.4 Iniciar o servidor: ```uvicorn app.main:app --reload```

### 2. Preparando o FrontEnd:
Na pasta "frontend", abra o terminal e siga o passo a passo:

1.1 Instalar dependências: ```pnpm install```  
1.2 Iniciar a aplicação: ```pnpm run dev```

## Autores

Discente: MIKA MARQUES MARQUES DOS SANTOS JÚNIOR  
Professora Responsável: ALANA DE ARAUJO OLIVEIRA MEIRELES TEIXEIRA
