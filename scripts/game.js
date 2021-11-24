function startNewGame () {
if(!players[0].name || !players[1].name){
    alert('Please add both Playernames!')
    return;
}
gameAreaElement.style.display = 'block';
};