window.addEventListener('load', function() {
    var apiKey = '3244F515BC4E765E926AB42643221CAB';
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
                var gameLink = document.createElement('a');
                gameLink.href = `https://store.steampowered.com/app/${game.appid}`;
                gameLink.style.textDecoration = 'none';
                gameLink.style.color = '#fff';

                var gameContainer = document.createElement('div');
                gameContainer.style.backgroundColor = '#333';
                gameContainer.style.color = '#fff';
                gameContainer.style.marginBottom = '20px';
                gameContainer.style.padding = '20px';
                gameContainer.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                gameContainer.style.borderRadius = '5px';
                gameContainer.style.display = 'flex';
                gameContainer.style.alignItems = 'center';
                gameContainer.style.width = '100%';

                var gameName = document.createElement('span');
                gameName.textContent = game.name;
                gameName.style.marginRight = '20px';

                var gameImage = document.createElement('img');
                gameImage.src = `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`;
                gameImage.alt = game.name;

                gameContainer.appendChild(gameName);
                gameContainer.appendChild(gameImage);
                gameLink.appendChild(gameContainer);
                gamesList.appendChild(gameLink);
            });
        });

    var apiKey = 'AIzaSyDcJ-2q9RvR5xRT3hGp2aed2b1jFq2YR4E';
    var channelId = 'UC_x5XG1OV2P6uZZ5FSM9Ttw';

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var videoList = document.getElementById('videoList');

            if (!videoList) {
                throw new Error('Could not find element with id "videoList"');
            }

            if (!data.items) {
                throw new Error('No videos found in API response');
            }

            videoList.style.display = 'flex';
            videoList.style.flexDirection = 'column';
            videoList.style.alignItems = 'center';

            data.items.forEach(item => {
                var videoContainer = document.createElement('div');
                videoContainer.style.width = '300px';
                videoContainer.style.margin = '10px';
                videoContainer.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';

                var videoLink = document.createElement('a');
                videoLink.href = `https://www.youtube.com/watch?v=${item.id.videoId}`;
                videoLink.target = '_blank';
                videoLink.style.display = 'block';
                videoLink.style.padding = '10px';
                videoLink.style.color = 'white';
                videoLink.style.textDecoration = 'none';

                var videoThumbnail = document.createElement('img');
                videoThumbnail.src = item.snippet.thumbnails.medium.url;
                videoThumbnail.alt = item.snippet.title;
                videoThumbnail.style.width = '100%';
                videoThumbnail.style.height = 'auto';

                videoLink.appendChild(videoThumbnail);
                videoContainer.appendChild(videoLink);

                var videoTitle = document.createElement('a');
                videoTitle.textContent = item.snippet.title;
                videoTitle.href = `https://www.youtube.com/watch?v=${item.id.videoId}`;
                videoTitle.target = '_blank';
                videoTitle.style.display = 'block';
                videoTitle.style.padding = '10px';
                videoTitle.style.color = 'white';
                videoTitle.style.textDecoration = 'none';

                videoContainer.appendChild(videoTitle);
                videoList.appendChild(videoContainer);
            });
        });
});