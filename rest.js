function getBoard(round, turn) {
    url = `http://127.0.0.1:5000/board?round=${round}&turn=${turn}`;
    $.get(url, function(boardJson) {
        console.log(boardJson);
    });
}