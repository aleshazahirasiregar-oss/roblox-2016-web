fetch('data/games.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('game-container');
        container.innerHTML = ''; // Reset kontainer
        data.games.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <h3>${game.title}</h3>
                <button onclick="window.location.href='${game.link}'">PLAY</button>
            `;
            container.appendChild(card);
        });
    })
    .catch(err => console.error("Error load data:", err));
