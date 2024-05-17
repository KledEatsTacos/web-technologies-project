window.onload = function() {
    var apiKey = '3244F515BC4E765E926AB42643221CAB'; //yall better not steal my api key, i'm watching
    var steamId = '76561198268467248';

    fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var gamesList = document.getElementById('gamesList');

            if (!gamesList) {
                throw new Error('Could not find element with id "gamesList"');
            }

            if (!data.response.games) {
                throw new Error('No games found in API response');
            }

            gamesList.style.display = 'flex';
            gamesList.style.flexDirection = 'column';
            gamesList.style.alignItems = 'center';

            data.response.games.forEach(game => {
                var gameContainer = document.createElement('div');
                gameContainer.style.backgroundColor = '#333';
                gameContainer.style.color = '#fff';
                gameContainer.style.marginBottom = '20px';
                gameContainer.style.padding = '20px';
                gameContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                gameContainer.style.borderRadius = '5px';
                gameContainer.style.display = 'flex';
                gameContainer.style.alignItems = 'center';
                gameContainer.style.width = '50%';

                var gameName = document.createElement('a');
                gameName.textContent = game.name;
                gameName.href = `https://store.steampowered.com/app/${game.appid}`;
                gameName.style.marginRight = '20px';
                gameName.style.color = '#fff';
                gameName.style.textDecoration = 'none';

                var gameImage = document.createElement('img');
                gameImage.src = `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`;
                gameImage.alt = game.name;

                gameContainer.appendChild(gameName);
                gameContainer.appendChild(gameImage);
                gamesList.appendChild(gameContainer);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}