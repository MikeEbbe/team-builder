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
        var players = characters.filter(c => c.Role == "Player");
        renderCoaches(coaches);
        renderPlayers(players)
    });
}

/**
 * Adds actions to buttons
 */
function addButtonActions() {
    /*var fieldPlayers = Array.from(document.getElementsByClassName('drag-box'));
    fieldPlayers.forEach(fieldPlayer => {
        fieldPlayer.addEventListener("click", () => {
            // console.log(fieldPlayer);
            changePlayer(fieldPlayer);
        });
    });*/

    var modalPlayers = Array.from(document.getElementsByClassName('modal-player-box'));
    modalPlayers.forEach(modalPlayer => {
        modalPlayer.addEventListener("click", () => {
            // console.log(fieldPlayer);
            changePlayer(modalPlayer);
        });
    });
}

/**
 * Render players to choose from inside modal
 * @param {array} players 
 */
function renderPlayers(players) {
    var teamsList = [];
    getTeamsList(players, teamsList)

    var modal = document.getElementById('modal');
    // HTML code to insert inside of modal
    var htmlInsert = '';

    // Cycle through all teams and add a panel for each
    teamsList.forEach(team => {
        htmlInsert +=
            '<button class="accordion">' + team + '</button>' +
            '<div class="panel">';
        // Cycle through all players and add them to the teams panel
        players.forEach(player => {
            if (player.EnglishTeam == team) {
                htmlInsert += 
                '<div class="modal-player-box">' +
                '<p class="modal-player-name">' + player.EnglishName + '</p>' +
                '<div class="modal-player-sprite-container">' +
                '<img src="' + player.Sprite + '" alt="' + player.EnglishName + '.png" class="modal-player-sprite"/>' +
                '<div class="icon">+</div>' +
                '</div>' +
                '</div>';
            }
        });
        htmlInsert += '</div>';
    });
    // Insert HTML code inside modal
    modal.innerHTML = htmlInsert;

    initializeAccordion();
    addButtonActions();
}

/**
 * Get list of all teams
 * @param {array} players 
 */
function getTeamsList(players, teamsList) {
    var fullTeamsList = [];
    players.forEach(player => {
        fullTeamsList.push(player.EnglishTeam);
    });

    $.each(fullTeamsList, function (i, el) {
        if ($.inArray(el, teamsList) === -1) teamsList.push(el);
    });

    // console.log(teamsList);
    return teamsList;
}

/**
 * Initialize accordion script
 */
function initializeAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
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

/**
 * Change the selected player with a player selected in a pop-up
 * @param {array} selectedPlayer 
 */
function changePlayer(selectedPlayer) {
    console.log(selectedPlayer);
}


/**
 * Dragging player boxes
 * @param {object} event 
 */
/*function onDragStart(event) {
    // Sprite of dragged player
    var playerSprite = document.getElementById(event.target.id);
    // Container of dragged player
    var playerContainer = playerSprite.parentElement.parentElement;
    // Info container (team logo & player name) of dragged player
    var playerInfo = playerContainer.children[1];
    // Team logo of dragged player
    var playerTeam = playerInfo.children[0].children[0];

    console.log("playerTeam:", playerTeam.src);
    event
        .dataTransfer
        .setData('text/plain', event.target.id)

    event
        .currentTarget
        .style
        .backgroundColor = "yellow"
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
}*/

// Initialize
getCharacters();