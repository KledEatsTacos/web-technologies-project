window.onload = function() {
    // Steam API stuff
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
                var gameContainer = document.createElement('div'); //For some reason css doesn't work, i need to do this
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

    // YouTube API stuff
    var channelId = 'UC4_Xo34GmGYX_CRTA6eDhSA';
    var apiKey = 'AIzaSyA2J_8cbqAMw5eFO5ce6oIU2n3MZs-mccE';

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=25&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            var videoList = document.getElementById('videoList');

            if (!videoList) {
                throw new Error('Could not find element with id "videoList"');
            }

            data.items.forEach(item => {
                var videoContainer = document.createElement('div');
                videoContainer.style.width = '300px';
                videoContainer.style.margin = '10px';
                videoContainer.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';

                var videoThumbnail = document.createElement('img');
                videoThumbnail.src = item.snippet.thumbnails.medium.url;
                videoThumbnail.alt = item.snippet.title;
                videoThumbnail.style.width = '100%';
                videoThumbnail.style.height = 'auto';

                var videoTitle = document.createElement('a');
                videoTitle.textContent = item.snippet.title;
                videoTitle.href = `https://www.youtube.com/watch?v=${item.id.videoId}`;
                videoTitle.target = '_blank';
                videoTitle.style.display = 'block';
                videoTitle.style.padding = '10px';
                videoTitle.style.color = 'white';
                videoTitle.style.textDecoration = 'none';

                videoContainer.appendChild(videoThumbnail);
                videoContainer.appendChild(videoTitle);
                videoList.appendChild(videoContainer);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}