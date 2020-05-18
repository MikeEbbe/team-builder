var characters;

/**
 * Get request to all characters
 */
function getCharacters() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://titlelist-85ef.restdb.io/rest/characters",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5cae686593d77c26f9734a8d",
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        // All Inazuma Eleven characters
        characters = response;
        // Filter out all coaches and store into variable
        var coaches = characters.filter(c => c.Role == "Coach");
        renderCoaches(coaches);
        // renderPlayers(players)
    });
}

/**
 * Render coaches in coachdropdown
 * @param {array} coaches Array of coaches
 */
function renderCoaches(coaches) {
    var coachDropdown = $("#coach-dropdown");

    // Add a dropdown option for each coach, and store some information in data attributes
    coaches.forEach(coach => {
        $(coachDropdown).append('<option value="' + coach.EnglishName + '" data-coachSprite="' + coach.Sprite + '" class="coach-option">' + coach.EnglishName + " (" + coach.EnglishTeam + ')</option>')
    });
}

/**
 * Update coach sprite when selecting a coach
 */
function updateSprite() {
    var coachDropdown = document.getElementById('coach-dropdown');
    var selectedCoach = coachDropdown.options[coachDropdown.selectedIndex];
    // Set source of the coach sprite equal to the image url of the selected coach
    $("#coach-sprite").attr("src", selectedCoach.dataset.coachsprite);
}

function onDragStart(event) {
    var playerImage = document.getElementById(event.target.id);
    var playerContainer = playerImage.parentElement.parentElement;
    var playerInfo = playerContainer.children[1];
    var playerTeam = playerInfo.children[0].children[0];
    console.log("playerTeam:", playerTeam.src);
    event
        .dataTransfer
        .setData('text/plain', event.target.id)

    event
        .currentTarget
        .style
        .backgroundColor = "yellow"
        // .dataset.source = playerTeam.src;
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    event.preventDefault();
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
}

// Initialize
getCharacters();