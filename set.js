function setPlayerName(_name,_id)
{
    if(_id===1)
    {
        document.getElementById("player1_name").innerHTML=_name;
    }
    else if(_id===2)
    {
        document.getElementById("player2_name").innerHTML=_name;
    }
    else if(_id===3)
    {
        document.getElementById("player3_name").innerHTML=_name;
    }
}