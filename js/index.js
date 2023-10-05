document.addEventListener("DOMContentLoaded", function(){
    let currentPage = 1;
    const container = document.getElementById('monster-container');
    const createMonsterDiv = document.getElementById('create-monster');
    const backButton = document.getElementById('back');
    const forwardButton = document.getElementById('forward');

    fetchMonsters(currentPage);
    
    // Create Monster Form
    const monsterForm = document.createElement('form');
    monsterForm.innerHTML = `
        <input type="text" name="name" placeholder="Name...">
        <input type="number" name="age" placeholder="Age...">
        <input type="text" name="description" placeholder="Description...">
        <button type="submit">Create Monster</button>
    `;
    createMonsterDiv.appendChild(monsterForm);
    
    monsterForm.addEventListener("submit", function(event){
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const description = event.target.description.value;

        createMonster(name, age, description);
    });

    backButton.addEventListener('click', function(){
        if (currentPage > 1) {
            currentPage--;
            fetchMonsters(currentPage);
        }
    });

    forwardButton.addEventListener('click', function(){
        currentPage++;
        fetchMonsters(currentPage);
    });
});

function fetchMonsters(page) {
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${page}`)
        .then(response => response.json())
        .then(monsters => {
            displayMon
