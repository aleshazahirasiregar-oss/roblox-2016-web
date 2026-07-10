fetch('data/games.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('game-container');
        container.innerHTML = '';
        data.games.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <h3>${game.title}</h3>
                <button onclick="window.open('${game.link}', '_blank')">PLAY</button>
            `;
            container.appendChild(card);
        });
    });
