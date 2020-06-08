// Global variables
var characters;
var players;
var coaches;
var emblems;
var playerToChange;
var playerToChangeId;

/**
 * GET request to all characters
 */
function getCharacters() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.jsonbin.io/v3/b/5ed3febf7741ef56a5657abf/latest",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "X-Master-Key": "$2b$10$AKrGdlO/SJPOrsrrh3wASeeIsMk92eFqLQbMyTwVTWvOcxxuj9eXy",
            "cache-control": "no-cache"
        }
    };

    $.ajax(settings).done(function (response) {
        // All Inazuma Eleven characters
        characters = response.record;

        // Filter coaches and players and store into variables
        coaches = characters.filter(c => c.Role == "Coach");
        players = characters.filter(c => c.Role == "Player");

        // Fetch emblems and render coaches and players
        getEmblems();
        renderCoaches(coaches, "English");
        renderPlayers(players, "English");
    });
}

/**
 * GET request to all team emblems
 */
function getEmblems() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.jsonbin.io/v3/b/5ed6744d79382f568bd1bf80/latest",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "X-Master-Key": "$2b$10$AKrGdlO/SJPOrsrrh3wASeeIsMk92eFqLQbMyTwVTWvOcxxuj9eXy",
            "cache-control": "no-cache"
        }
    };

    $.ajax(settings).done(function (response) {
        // All emblems
        emblems = response.record;
        renderEmblems(emblems, "English");
    });
}

/**
 * Adds actions to buttons
 */
function addButtonActions() {
    // Select all player boxes (11 on the pitch and 5 on the bench) and store into a variable  
    var fieldPlayers = Array.from(document.getElementsByClassName('drag-box'));
    // Collect data for each player when clicked on
    fieldPlayers.forEach(fieldPlayer => {
        fieldPlayer.addEventListener("click", () => {
            playerToChange = fieldPlayer;
            playerToChangeId = fieldPlayer.dataset.id;
        });
    });

    // Render coaches, players and emblems again when changing language to English 
    $("#english-names-input").click(function () {
        renderCoaches(coaches, "English");
        renderPlayers(players, "English");
        renderEmblems(emblems, "English");
    });

    // Render coaches, players and emblems again when changing language to Japanese
    $("#japanese-names-input").click(function () {
        renderCoaches(coaches, "Japanese");
        renderPlayers(players, "Japanese");
        renderEmblems(emblems, "Japanese");
    });
}

/**
 * Render players to choose from inside modal
 * @param {array} players players to be rendered inside of modal
 * @param {string} language chosen language of player names
 */
function renderPlayers(players, language) {
    // Get Teamslist - TODO: Make teamslist a JSON object
    var teamsList = [];
    getTeamsList(players, teamsList, language)

    var modal = document.getElementById('modal');
    // HTML code to insert inside of modal
    var htmlInsert = '';

    // Cycle through all teams and add an accordion panel for each
    for (var i = 0; i < teamsList.length; i++) {
        var team = teamsList[i];
        htmlInsert +=
            '<button class="accordion"><img src="' + team[1] + '" class="modal-team-sprite">' + team[0] + '</button>' +
            '<div class="panel">';
        // Cycle through all players and add them to the teams panel
        for (var j = 0; j < players.length; j++) {
            var player = players[j];
            // If current player is in the current team add a player box
            if (player[language + 'Team'] == team[0]) {
                htmlInsert +=
                    '<div class="modal-player-box">' +
                    '<p class="modal-player-name">' + player[language + 'Name'] + '</p>' +
                    '<div class="modal-player-box-container" style="display: flex;">' +
                    '<div class="modal-player-props-container">' +
                    `<div class='modal-player-position' style='height: 24px; width: 36px; background-image: url("/images/positions/` + player.Position + `.png");'></div>` +
                    `<div class='modal-player-element' style='height: 24px; width: 36px; background-image: url("/images/elements/` + player.Element + `.png");'></div>` +
                    `<div class='modal-player-gender' style='height: 24px; width: 36px; background-image: url("/images/genders/` + player.Gender + `.png");'></div>` +
                    '</div>' +
                    '<div class="modal-player-sprite-container" data-dismiss="modal" data-name="' + player[language + 'Name'] + '" data-sprite="' + player.Sprite + '" data-team-sprite="' + player.TeamSprite + '">' +
                    '<img src="' + player.Sprite + '" alt="' + player[language + 'Name'] + '.png" class="modal-player-sprite"/>' +
                    '<div class="icon">+</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
        }
        htmlInsert += '</div>';
    }
    // Insert HTML code inside modal
    modal.innerHTML = htmlInsert;

    // Initialize modal script
    initializeModal();
}

/**
 * Get list of all teams
 * @param {array} players players to fetch teams from
 * @param {array} teamsList list of teams to put all teams in
 * @param {string} language chosen language
 */
function getTeamsList(players, teamsList, language) {
    var fullTeamsList = [];
    var tempArray = [];

    // Add all team names and emblem to a list
    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        fullTeamsList.push([
            player[language + 'Team'],
            player.TeamSprite
        ]);
    }

    // Add one of each teams to temporary array
    $.each(fullTeamsList, function (i, el) {
        if ($.inArray(el[0], tempArray) === -1) tempArray.push(el[0]);
        if ($.inArray(el[1], tempArray) === -1) tempArray.push(el[1]);
    });

    // Filter data and store into a final list
    var j = 1;
    for (var i = 0; i < tempArray.length; i += 2) {
        teamsList.push(
            [
                tempArray[i],
                tempArray[j]
            ]);
        j += 2;
    }

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

    // Add change player action to all modal player boxes
    var modalPlayers = Array.from(document.getElementsByClassName('modal-player-sprite-container'));
    modalPlayers.forEach(modalPlayer => {
        modalPlayer.addEventListener("click", () => {
            changePlayer(modalPlayer);
        });
    });
}

/**
 * Render coaches in coachdropdown
 * @param {array} coaches Array of coaches
 * @param {string} language chosen language
 */
function renderCoaches(coaches, language) {
    var coachDropdown = $("#coach-dropdown");
    coachDropdown.empty();

    // Add a dropdown option for each coach, and store some information in data attributes
    for (var i = 0; i < coaches.length; i++) {
        var coach = coaches[i]
        $(coachDropdown).append('<option value="' + coach[language + 'Name'] + '" data-coachSprite="' + coach.Sprite + '" class="coach-option">' + coach[language + 'Name'] + " (" + coach[language + 'Team'] + ')</option>')
    }
}

/**
 * 
 * @param {array} emblems Array of emblems
 * @param {string} language chosen language
 */
function renderEmblems(emblems, language) {
    var emblemDropdown = $("#emblem-dropdown");
    emblemDropdown.empty();

    // Add a dropdown option for each emblem, and store some information in data attributes
    for (var i = 0; i < emblems.length; i++) {
        var emblem = emblems[i]
        $(emblemDropdown).append('<option value="' + emblem[language + 'Team'] + '" data-emblemSprite="' + emblem.Sprite + '" class="emblem-option">' + emblem[language + 'Team'] + '</option>');
    }
}

/**
 * Update sprite when selecting a different option
 * @param {string} type Type of sprite e.g. coach or emblem
 */
function updateSprite(type) {
    var dropdown = document.getElementById([type] + '-dropdown');
    var selectedOption = dropdown.options[dropdown.selectedIndex];

    // Set source of the sprite equal to the image url of the selected option
    var spriteToChange = document.getElementById([type + "-sprite"]);
    spriteToChange.src = selectedOption.dataset[type + 'sprite'];
}

/**
 * Change the selected player with a player selected in a pop-up
 * @param {array} newPlayer 
 */
function changePlayer(newPlayer) {
    // Define player name, sprite and emblem
    var newPlayerName = newPlayer.dataset.name;
    var newPlayerSprite = newPlayer.dataset.sprite;
    var newPlayerTeamSprite = newPlayer.dataset.teamSprite;

    // Define new player box
    var playerBoxToChange = document.getElementById(playerToChange.id).parentElement;
    var htmlInsert = "";
    htmlInsert +=
        '<div id="drag-box-' + playerToChangeId + '-container">' +
        '<div class="drag-box" id="drag-box-' + playerToChangeId + '" style="width: 126px; height: 126px; border-top: 2px solid; border-right: 2px solid; border-left: 2px solid;" data-toggle="modal" data-target="#myModal"  data-id="' + playerToChangeId + '">' +
        '<img src="' + newPlayerSprite + '" style="width: 126px; height: 126px; id="' + playerToChangeId + '-sprite" data-pg-name="' + playerToChangeId + '-sprite" class="sub-sprite"/>' +
        '</div>' +
        '<div class="sub-info-container" style="border: 2px solid; width: 163px; height: 28px; margin-top: -4px;" id="' + playerToChangeId + '-info-container" data-pg-name="' + playerToChangeId + '-info-container">' +
        '<div style="height: 100%; width: 28px; border-right: 2px solid;" id="' + playerToChangeId + '-element-container">' +
        '<img style="width: auto; height: 100%;" id="' + playerToChangeId + '-element" data-pg-name="' + playerToChangeId + '-element" class="subtitle-element" src="' + newPlayerTeamSprite + '"/>' +
        '</div>' +
        '<span style="font-family: Segoe UI Regular; font-size: 24px; display: block; width: calc(100% - 32px); height: auto; margin-left: 32px; margin-top: -32px;" id="' + playerToChangeId + '-name" data-pg-name="' + playerToChangeId + '-name" class="subtitle-name">' + newPlayerName + '</span>' +
        '</div>' +
        '</div>';

    // Change selected playerbox to new playerbox
    playerBoxToChange.outerHTML = htmlInsert;

    // Add button actions again to make new player box clickable
    addButtonActions();
}

// Initialize
getCharacters();
addButtonActions();