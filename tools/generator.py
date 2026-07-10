import json
import os

def add_game(title, link):
    file_path = '../data/games.json'
    
    # Baca file yang ada
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            data = json.load(f)
    else:
        data = {"games": []}
    
    # Tambah game baru
    data['games'].append({"title": title, "link": link})
    
    # Simpan kembali
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)
    print(f"Berhasil menambahkan: {title}")

# Contoh pemakaian
add_game("Retro Obby 2016", "https://www.roblox.com/games/123")
