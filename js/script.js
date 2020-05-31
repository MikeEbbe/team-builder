var characters;
var players;
var coaches;
var playerToChange;
var playerToChangeId;

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
        coaches = characters.filter(c => c.Role == "Coach");
        players = characters.filter(c => c.Role == "Player");
        renderCoaches(coaches, "English");
        renderPlayers(players, "English");
    });
}

/**
 * Adds actions to buttons
 */
function addButtonActions() {
    var fieldPlayers = Array.from(document.getElementsByClassName('drag-box'));
    console.log("fieldplayers:", fieldPlayers);
    fieldPlayers.forEach(fieldPlayer => {
        fieldPlayer.addEventListener("click", () => {
            // console.log(fieldPlayer);
            playerToChange = fieldPlayer;
            playerToChangeId = fieldPlayer.dataset.id;
            // console.log(playerToChange);
        });
    });

    $("#english-names-input").click(function () {
        renderCoaches(coaches, "English");
        renderPlayers(players, "English");
    });

    $("#japanese-names-input").click(function () {
        renderCoaches(coaches, "Japanese");
        renderPlayers(players, "Japanese");
    });
}

/*var button = document.getElementById('player-container');
button.addEventListener("click", function () {
    var node = document.getElementById('bench-container');

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
});

var element = $("#bench-container"); // global variable
var getCanvas; // global variable
html2canvas(element, {
    onrendered: function (canvas) {
        canvas.setAttribute("id", "canvas");
        document.body.append(canvas);
        getCanvas = canvas;
    }
});*/

/**
 * Render players to choose from inside modal
 * @param {array} players players to be rendered inside of modal
 * @param {string} language chosen language of player names
 */
function renderPlayers(players, language) {
    var teamsList = [];
    getTeamsList(players, teamsList, language)

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
            if (player[language + 'Team'] == team) {
                // console.log(player[language + 'Team']);
                htmlInsert +=
                    '<div class="modal-player-box">' +
                    '<p class="modal-player-name">' + player[language + 'Name'] + '</p>' +
                    '<div class="modal-player-sprite-container" data-dismiss="modal" data-name="' + player[language + 'Name'] + '" data-sprite="' + player.Sprite + '" data-team-sprite="' + player.TeamSprite + '">' +
                    '<img src="' + player.Sprite + '" alt="' + player[language + 'Name'] + '.png" class="modal-player-sprite"/>' +
                    '<div class="icon">+</div>' +
                    '</div>' +
                    '</div>';
            }
        });
        htmlInsert += '</div>';
    });
    // Insert HTML code inside modal
    modal.innerHTML = htmlInsert;

    initializeModal();
}

/**
 * Get list of all teams
 * @param {array} players 
 */
function getTeamsList(players, teamsList, language) {
    var fullTeamsList = [];
    players.forEach(player => {
        fullTeamsList.push(player[language + 'Team']);
    });

    $.each(fullTeamsList, function (i, el) {
        if ($.inArray(el, teamsList) === -1) teamsList.push(el);
    });

    // console.log(teamsList);
    return teamsList;
}

/**
 * Initialize modal script
 */
function initializeModal() {
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

    var modalPlayers = Array.from(document.getElementsByClassName('modal-player-sprite-container'));
    modalPlayers.forEach(modalPlayer => {
        modalPlayer.addEventListener("click", () => {
            // console.log(fieldPlayer);
            changePlayer(modalPlayer);
        });
    });
}

/**
 * Render coaches in coachdropdown
 * @param {array} coaches Array of coaches
 */
function renderCoaches(coaches, language) {
    var coachDropdown = $("#coach-dropdown");
    coachDropdown.empty();

    // Add a dropdown option for each coach, and store some information in data attributes
    coaches.forEach(coach => {
        $(coachDropdown).append('<option value="' + coach[language + 'Name'] + '" data-coachSprite="' + coach.Sprite + '" class="coach-option">' + coach[language + 'Name'] + " (" + coach[language + 'Team'] + ')</option>')
    });
}

/**
 * Update coach sprite when selecting a coach
 */
function updateCoachSprite() {
    var coachDropdown = document.getElementById('coach-dropdown');
    var selectedCoach = coachDropdown.options[coachDropdown.selectedIndex];
    // Set source of the coach sprite equal to the image url of the selected coach
    $("#coach-sprite").attr("src", selectedCoach.dataset.coachsprite);
}

/**
 * Change the selected player with a player selected in a pop-up
 * @param {array} newPlayer 
 */
function changePlayer(newPlayer) {
    /**
     * Information to update:
     * Name
     * Sprite
     * Team emblem
     */

    // console.log(newPlayer);
    var newPlayerName = newPlayer.dataset.name;
    var newPlayerSprite = newPlayer.dataset.sprite;
    var newPlayerTeamSprite = newPlayer.dataset.teamSprite;

    var playerBoxToChange = document.getElementById(playerToChange.id).parentElement;
    // console.log(playerBoxToChange);
    var htmlInsert = "";
    htmlInsert +=
        '<div id="drag-box-' + playerToChangeId + '-container">' +
        '<div class="drag-box" id="drag-box-' + playerToChangeId + '" style="width: 118px; height: 118px; border-top: 2px solid; border-right: 2px solid; border-left: 2px solid;" data-toggle="modal" data-target="#myModal"  data-id="' + playerToChangeId + '">' +
        '<img src="' + newPlayerSprite + '" style="width: 118px; height: 118px; margin-bottom: -3px;" id="' + playerToChangeId + '-sprite" data-pg-name="' + playerToChangeId + '-sprite" class="sub-sprite"/>' +
        '</div>' +
        '<div class="sub-info-container" style="border: 2px solid; width: 118px; height: 28px; margin-top: -4px;" id="' + playerToChangeId + '-info-container" data-pg-name="' + playerToChangeId + '-info-container">' +
        '<div style="height: 100%; width: 28px; border-right: 2px solid;" id="' + playerToChangeId + '-element-container">' +
        '<img style="width: auto; height: 100%;" id="' + playerToChangeId + '-element" data-pg-name="' + playerToChangeId + '-element" class="subtitle-element" src="' + newPlayerTeamSprite + '"/>' +
        '</div>' +
        '<span style="font-family: Segoe UI Regular; font-size: 24px; display: block; width: calc(100% - 32px); height: auto; margin-left: 32px; margin-top: -36px;" id="' + playerToChangeId + '-name" data-pg-name="' + playerToChangeId + '-name" class="subtitle-name">' + newPlayerName + '</span>' +
        '</div>' +
        '</div>';

    playerBoxToChange.outerHTML = htmlInsert;

    // console.log("playerToChange:", playerToChange);
    // console.log("playerToChangeId:", playerToChangeId);
    // console.log("newPlayer:", newPlayer);

    addButtonActions();
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
addButtonActions();