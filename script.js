fetch('data/games.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('game-container');
        data.games.forEach(game => {
            container.innerHTML += `
                <div class="game-card">
                    <h3>${game.title}</h3>
                    <button onclick="window.location.href='${game.link}'">Play</button>
                </div>`;
        });
    });

