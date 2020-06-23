// Global variables
var playerToChange;
var playerToChangeId;

function addPlayerBoxActions() {
    // Select all player boxes (11 on the pitch and 5 on the bench) and store into a variable  
    var fieldPlayers = Array.from(document.getElementsByClassName('drag-box'));
    // Collect data for each player when clicked on
    fieldPlayers.forEach(fieldPlayer => {
        fieldPlayer.addEventListener("click", () => {
            playerToChange = fieldPlayer;
            playerToChangeId = fieldPlayer.dataset.id;
        });
    });
}

/**
 * Adds actions to buttons
 */
function addButtonActions() {
    // Render coaches, players and emblems again when changing language to English 
    $("#english-names-input").unbind("click").click(function () {
        renderCoaches(coaches, "English");
        renderPlayers(players, "English");
        renderEmblems(emblems, "English");
    });

    // Render coaches, players and emblems again when changing language to Japanese
    $("#japanese-names-input").unbind("click").click(function () {
        renderCoaches(coaches, "Japanese");
        renderPlayers(players, "Japanese");
        renderEmblems(emblems, "Japanese");
    });

    $("#reset-button").unbind("click").click(function () {
        clearPlayers();
    });

    $("#save-button").unbind("click").click(function () {
        saveTeam();
    });
}


/**
 * Render players to choose from inside modal
 * @param {array} players players to be rendered inside of modal
 * @param {string} language chosen language of player names
 */
function renderPlayers(players, language) {
    // players.sort((a,b) => (a[language + 'Name'] > b[language + 'Name']) ? 1 : ((b[language + 'Name'] > a[language + 'Name']) ? -1 : 0));

    var modal = document.getElementById('modal');
    // HTML code to insert inside of modal
    var htmlInsert = '';

    var games = [
        {
            'IE1': 'Inazuma Eleven',
            'IE2': 'Inazuma Eleven 2',
            'IE3': 'Inazuma Eleven 3',
        }
    ];

    // Cycle through all games and add a heading for each game
    for (var i = 0; i < Object.keys(games[0]).length; i++) {
        htmlInsert +=
            '<h4 class="game-title">' + Object.values(games[0])[i]; + '</button>';

        // Cycle through all teams and add an accordion panel for each team
        for (var j = 0; j < teams.length; j++) {
            var team = teams[j];
            if (team.Game == Object.keys(games[0])[i]) {
                htmlInsert +=
                    '<button class="accordion"><img src="' + team.Sprite + '" class="modal-team-sprite">' + team[language + 'Name'] + '</button>' +
                    '<div class="panel">';
                // Cycle through all players and add them to the teams panel
                for (var k = 0; k < players.length; k++) {
                    var player = players[k];
                    // If current player is in the current team add a player box
                    if (player[language + 'Team'] == team[language + 'Name']) {
                        if (player.Game == team.Game) {
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
                }
                htmlInsert += '</div>';
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
 * Render formations in formation dropdown
 * @param {*} formations 
 */
function renderFormations(formations) {
    var formationDropdown = $("#formation-dropdown");

    // Add a dropdown option for each formation, and store some information in data attributes
    for (var i = 0; i < formations.length; i++) {
        var formation = formations[i];
        $(formationDropdown).append("<option value='" + formation.name + "' data-html='" + he.encode(formation.html) + "' class='formation-option'>" + formation.name + "</option>");
    }
}

/**
 * Render coaches in coach dropdown
 * @param {array} coaches Array of coaches
 * @param {string} language chosen language
 */
function renderCoaches(coaches, language) {
    var coachDropdown = $("#coach-dropdown");
    coachDropdown.empty();

    // Add a dropdown option for each coach, and store some information in data attributes
    for (var i = 0; i < coaches.length; i++) {
        var coach = coaches[i];
        $(coachDropdown).append('<option value="' + coach[language + 'Name'] + '" data-coachSprite="' + coach.Sprite + '" class="coach-option">' + coach[language + 'Name'] + " (" + coach[language + 'Team'] + ')</option>');
    }
}

function changeFormation() {
    var formationDropdown = document.getElementById('formation-dropdown');
    var selectedOption = formationDropdown.options[formationDropdown.selectedIndex];

    $("#field-players-container").html(he.decode(selectedOption.dataset.html));

    addPlayerBoxActions();
}

/**
 * Render emblems in emblem dropdown
 * @param {array} emblems Array of emblems
 * @param {string} language chosen language
 */
function renderEmblems(emblems, language) {
    emblems.sort((a, b) => (a[language + 'Team'] > b[language + 'Team']) ? 1 : ((b[language + 'Team'] > a[language + 'Team']) ? -1 : 0));

    var emblemDropdown = $("#emblem-dropdown");
    emblemDropdown.empty();

    // Add a dropdown option for each emblem, and store some information in data attributes
    for (var i = 0; i < emblems.length; i++) {
        var emblem = emblems[i];
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

    /*
        <div id="drag-box-player-11-container">
            <div class="drag-box" id="drag-box-player-11" data-toggle="modal" data-target="#myModal"
            data-id="player-11"></div>
            <div class="player-info-container" id="player-11-info-container"
            data-pg-name="Player 11 info container">
                <div id="player-11-element-container" class="player-element-container"></div>
                <span id="player-11-name" data-pg-name="Player 11 name" class="player-name">Player
                #11</span>
            </div>
        </div>
    */

    htmlInsert +=
        '<div id="drag-box-' + playerToChangeId + '-container" class="drag-box-container">' +
        '<div class="drag-box" id="drag-box-' + playerToChangeId + '" data-toggle="modal" data-target="#myModal"  data-id="' + playerToChangeId + '" style="background-image: none">' +
        '<img src="' + newPlayerSprite + '" style="height: 126px; max-width: 126px" id="' + playerToChangeId + '-sprite" data-pg-name="' + playerToChangeId + '-sprite" class="sub-sprite"/>' +
        '</div>' +
        '<div class="sub-info-container" id="' + playerToChangeId + '-info-container" data-pg-name="' + playerToChangeId + '-info-container">' +
        '<div id="' + playerToChangeId + '-element-container" class="player-element-container" style="background-image: none">' +
        '<img style="width: auto; height: 100%;" id="' + playerToChangeId + '-element" data-pg-name="' + playerToChangeId + '-element" class="subtitle-element" src="' + newPlayerTeamSprite + '"/>' +
        '</div>' +
        '<span id="' + playerToChangeId + '-name" data-pg-name="' + playerToChangeId + '-name" class="subtitle-name">' + newPlayerName + '</span>' +
        '</div>' +
        '</div>';

    // Change selected playerbox to new playerbox
    playerBoxToChange.outerHTML = htmlInsert;

    // Add button actions again to make new player box clickable
    addPlayerBoxActions();
}

function clearPlayers() {
    var playerContainers = $('.player-container');
    var subContainers = $('.sub-container');
    for (var i = 0; i < playerContainers.length; i++) {
        var j = i + 1;
        playerContainers[i].innerHTML =
            '<div id="drag-box-player-' + j + '-container" class="drag-box-container">' +
            '<div class="drag-box" id="drag-box-player-' + j + '" data-toggle="modal" data-target="#myModal"  data-id="player-' + j + '"></div>' +
            '<div class="player-info-container" id="player-' + j + '-info-container" data-pg-name="player-' + j + '-info-container">' +
            '<div class="player-element-container" id="player-' + j + '-element-container"></div>' +
            '<span id="player-' + j + '-name" data-pg-name="player-' + j + '-name" class="player-name">Player #' + j + '</span>' +
            '</div>' +
            '</div>';
    } for (var k = 0; k < subContainers.length; k++) {
        var l = k + 1;
        subContainers[k].innerHTML =
            '<div id="drag-box-sub-' + l + '-container"  class="drag-box-container">' +
            '<div class="drag-box" id="drag-box-sub-' + l + '" data-toggle="modal" data-target="#myModal"  data-id="sub-' + l + '"></div>' +
            '<div class="sub-info-container" id="sub-' + l + '-info-container" data-pg-name="sub-' + l + '-info-container">' +
            '<div class="sub-element-container" id="sub-' + l + '-element-container"></div>' +
            '<span id="sub-' + l + '-name" data-pg-name="sub-' + l + '-name" class="subtitle-name">Sub #' + l + '</span>' +
            '</div>' +
            '</div>';
    }
    addPlayerBoxActions();
}

function saveTeam() {
    var element = document.getElementById("body-grid");
    var modalImage = $("#image-modal-body");
    modalImage.html('<img src="/images/loading.gif" style="width: 100%; height: 622px;"/>');
    html2canvas(element, {
        allowTaint: true,
        x: 200,
        /*responsive: true,*/
        onrendered: function (canvas) {
            canvas.setAttribute("id", "canvas");
            canvas.getContext('2d').imageSmoothingEnabled = false;
            modalImage.html('<p style="text-align: center; font-weight: bold;">To save: right click + "Save image as"</p>')
            modalImage.append(canvas);
        }
    });
}

// Initialize
renderFormations(formations);
renderCoaches(coaches, "English");
renderEmblems(emblems, "English");
renderPlayers(players, "English");
addPlayerBoxActions();
addButtonActions();