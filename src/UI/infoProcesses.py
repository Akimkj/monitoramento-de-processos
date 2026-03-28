import psutil

def displayProcesses():

    for p in psutil.process_iter(['pid', 'status', 'name', 'username']):
        try:
            info = p.info
            print(f"{f"PID: {info['pid']}":<20} {f"Status: {info['status']}":<25} {f"Nome: {info['name']}":<40} Username: {info['username']}")
        except:
            continue
    psutil.process_iter.cache_clear()
    print("\n\n")