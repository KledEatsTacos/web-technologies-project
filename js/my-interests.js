$.ajax({
    url: 'https://<region>.api.riotgames.com/lol/summoner/v4/summoners/by-name/KledEatsTacos?api_key=RGAPI-8940b504-7c66-4da1-ba18-d7862c45712f',
    method: 'GET',
    success: function(response) {
        // Display the data in your HTML
        $('#summonerName').text(response.name);
        $('#summonerLevel').text(response.summonerLevel);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    }
});