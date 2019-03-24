function getBoard(round, turn) {
    url = `http://127.0.0.1:5000/board?round=${round}&turn=${turn}`;
    $.get(url, function(boardJson) {
        console.log(boardJson);
        for (i = 0; i < 3; i++)
            setPlayerName(boardJson.players[i].name, i);
    });
}