import json

def add_game(title, link):
    with open('../data/games.json', 'r+') as f:
        data = json.load(f)
        data['games'].append({"title": title, "link": link})
        f.seek(0)
        json.dump(data, f, indent=4)

# Gunakan ini buat nambah game tanpa manual
add_game("Game Baru", "https://roblox.com/games/3")
print("Game berhasil ditambahkan!")

