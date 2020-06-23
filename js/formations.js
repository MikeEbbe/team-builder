var formations = [
    {
        name: '4-4-2 (F-Basic)',
        html: '<div id="player-1-container" data-pg-name="Player 1 container" style="justify-self: center; bottom: 0;" class="player-container"><div class="drag-box-container" id="drag-box-player-1-container"><div class="drag-box" id="drag-box-player-1" data-toggle="modal" data-target="#myModal" data-id="player-1"></div><div class="player-info-container" id="player-1-info-container" data-pg-name="Player 1 info container"><div id="player-1-element-container" class="player-element-container"></div><span id="player-1-name" data-pg-name="Player 1 name" class="player-name">Player #1</span></div></div></div><div id="player-2-container" data-pg-name="Player 2 container" style="margin-left: 7%; bottom: 230px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-2-container"><div class="drag-box" id="drag-box-player-2" data-toggle="modal" data-target="#myModal" data-id="player-2"></div><div class="player-info-container" id="player-2-info-container" data-pg-name="Player 2 info container"><div id="player-2-element-container" class="player-element-container"></div><span id="player-2-name" data-pg-name="Player 2 name" class="player-name">Player #2</span></div></div></div><div id="player-3-container" data-pg-name="Player 3 container" style="margin-left: 29.5%; bottom: 140px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-3-container"><div class="drag-box" id="drag-box-player-3" data-toggle="modal" data-target="#myModal" data-id="player-3"></div><div class="player-info-container" id="player-3-info-container" data-pg-name="Player 3 info container"><div id="player-3-element-container" class="player-element-container"></div><span id="player-3-name" data-pg-name="Player 3 name" class="player-name">Player #3</span></div></div></div><div id="player-4-container" data-pg-name="Player 4 container" style="margin-right: 29.5%; bottom: 140px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-4-container"><div class="drag-box" id="drag-box-player-4" data-toggle="modal" data-target="#myModal" data-id="player-4"></div><div class="player-info-container" id="player-4-info-container" data-pg-name="Player 4 info container"><div id="player-4-element-container" class="player-element-container"></div><span id="player-4-name" data-pg-name="Player 4 name" class="player-name">Player #4</span></div></div></div><div id="player-5-container" data-pg-name="Player 5 container" style="margin-right: 7%; bottom: 230px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-5-container"><div class="drag-box" id="drag-box-player-5" data-toggle="modal" data-target="#myModal" data-id="player-5"></div><div class="player-info-container" id="player-5-info-container" data-pg-name="Player 5 info container"><div id="player-5-element-container" class="player-element-container"></div><span id="player-5-name" data-pg-name="Player 5 name" class="player-name">Player #5</span></div></div></div><div id="player-6-container" data-pg-name="Player 6 container" style="margin-left: 7%; top: 298px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-6-container"><div class="drag-box" id="drag-box-player-6" data-toggle="modal" data-target="#myModal" data-id="player-6"></div><div class="player-info-container" id="player-6-info-container" data-pg-name="Player 6 info container"><div id="player-6-element-container" class="player-element-container"></div><span id="player-6-name" data-pg-name="Player 6 name" class="player-name">Player #6</span></div></div></div><div id="player-7-container" data-pg-name="Player 7 container" style="top: 388px; margin-left: 29.5%" class="player-container"><div class="drag-box-container" id="drag-box-player-7-container"><div class="drag-box" id="drag-box-player-7" data-toggle="modal" data-target="#myModal" data-id="player-7"></div><div class="player-info-container" id="player-7-info-container" data-pg-name="Player 7 info container"><div id="player-7-element-container" class="player-element-container"></div><span id="player-7-name" data-pg-name="Player 7 name" class="player-name">Player #7</span></div></div></div><div id="player-8-container" data-pg-name="Player 8 container" style="margin-right: 29.5%; top: 388px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-8-container"><div class="drag-box" id="drag-box-player-8" data-toggle="modal" data-target="#myModal" data-id="player-8"></div><div class="player-info-container" id="player-8-info-container" data-pg-name="Player 8 info container"><div id="player-8-element-container" class="player-element-container"></div><span id="player-8-name" data-pg-name="Player 8 name" class="player-name">Player #8</span></div></div></div><div id="player-9-container" data-pg-name="Player 9 container" style="margin-right: 7%; top: 298px; right: 0px" class="player-container"><div class="drag-box-container" id="drag-box-player-9-container"><div class="drag-box" id="drag-box-player-9" data-toggle="modal" data-target="#myModal" data-id="player-9"></div><div class="player-info-container" id="player-9-info-container" data-pg-name="Player 9 info container"><div id="player-9-element-container" class="player-element-container"></div><span id="player-9-name" data-pg-name="Player 9 name" class="player-name">Player #9</span></div></div></div><div id="player-10-container" data-pg-name="Player 10 container" style="top: 75px; margin-left: 25%" class="player-container"><div class="drag-box-container" id="drag-box-player-10-container"><div class="drag-box" id="drag-box-player-10" data-toggle="modal" data-target="#myModal" data-id="player-10"></div><div class="player-info-container" id="player-10-info-container" data-pg-name="Player 10 info container"><div id="player-10-element-container" class="player-element-container"></div><span id="player-10-name" data-pg-name="Player 10 name" class="player-name">Player #10</span></div></div></div><div id="player-11-container" data-pg-name="Player 11 container" style="margin-right: 25%; top: 75px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-11-container"><div class="drag-box" id="drag-box-player-11" data-toggle="modal" data-target="#myModal" data-id="player-11"></div><div class="player-info-container" id="player-11-info-container" data-pg-name="Player 11 info container"><div id="player-11-element-container" class="player-element-container"></div><span id="player-11-name" data-pg-name="Player 11 name" class="player-name">Player #11</span></div></div></div>'
    },
    {
        name: '4-3-3 (F-Free March)',
        html: '<div id="player-1-container" data-pg-name="Player 1 container" style="justify-self: center; bottom: 0;" class="player-container"><div class="drag-box-container" id="drag-box-player-1-container"><div class="drag-box" id="drag-box-player-1" data-toggle="modal" data-target="#myModal" data-id="player-1"></div><div class="player-info-container" id="player-1-info-container" data-pg-name="Player 1 info container"><div id="player-1-element-container" class="player-element-container"></div><span id="player-1-name" data-pg-name="Player 1 name" class="player-name">Player #1</span></div></div></div><div id="player-2-container" data-pg-name="Player 2 container" style="margin-left: 5.5%; bottom: 150px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-2-container"><div class="drag-box" id="drag-box-player-2" data-toggle="modal" data-target="#myModal" data-id="player-2"></div><div class="player-info-container" id="player-2-info-container" data-pg-name="Player 2 info container"><div id="player-2-element-container" class="player-element-container"></div><span id="player-2-name" data-pg-name="Player 2 name" class="player-name">Player #2</span></div></div></div><div id="player-3-container" data-pg-name="Player 3 container" style="margin-left: 29.5%; bottom: 150px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-3-container"><div class="drag-box" id="drag-box-player-3" data-toggle="modal" data-target="#myModal" data-id="player-3"></div><div class="player-info-container" id="player-3-info-container" data-pg-name="Player 3 info container"><div id="player-3-element-container" class="player-element-container"></div><span id="player-3-name" data-pg-name="Player 3 name" class="player-name">Player #3</span></div></div></div><div id="player-4-container" data-pg-name="Player 4 container" style="margin-right: 29.5%; bottom: 150px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-4-container"><div class="drag-box" id="drag-box-player-4" data-toggle="modal" data-target="#myModal" data-id="player-4"></div><div class="player-info-container" id="player-4-info-container" data-pg-name="Player 4 info container"><div id="player-4-element-container" class="player-element-container"></div><span id="player-4-name" data-pg-name="Player 4 name" class="player-name">Player #4</span></div></div></div><div id="player-5-container" data-pg-name="Player 5 container" style="margin-right: 5.5%; bottom: 150px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-5-container"><div class="drag-box" id="drag-box-player-5" data-toggle="modal" data-target="#myModal" data-id="player-5"></div><div class="player-info-container" id="player-5-info-container" data-pg-name="Player 5 info container"><div id="player-5-element-container" class="player-element-container"></div><span id="player-5-name" data-pg-name="Player 5 name" class="player-name">Player #5</span></div></div></div><div id="player-6-container" data-pg-name="Player 6 container" style="margin-left: 17.5%; top: 378px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-6-container"><div class="drag-box" id="drag-box-player-6" data-toggle="modal" data-target="#myModal" data-id="player-6"></div><div class="player-info-container" id="player-6-info-container" data-pg-name="Player 6 info container"><div id="player-6-element-container" class="player-element-container"></div><span id="player-6-name" data-pg-name="Player 6 name" class="player-name">Player #6</span></div></div></div><div id="player-7-container" data-pg-name="Player 7 container" style="top: 378px; justify-self: center;" class="player-container"><div class="drag-box-container" id="drag-box-player-7-container"><div class="drag-box" id="drag-box-player-7" data-toggle="modal" data-target="#myModal" data-id="player-7"></div><div class="player-info-container" id="player-7-info-container" data-pg-name="Player 7 info container"><div id="player-7-element-container" class="player-element-container"></div><span id="player-7-name" data-pg-name="Player 7 name" class="player-name">Player #7</span></div></div></div><div id="player-8-container" data-pg-name="Player 8 container" style="margin-right: 17.5%; top: 378px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-8-container"><div class="drag-box" id="drag-box-player-8" data-toggle="modal" data-target="#myModal" data-id="player-8"></div><div class="player-info-container" id="player-8-info-container" data-pg-name="Player 8 info container"><div id="player-8-element-container" class="player-element-container"></div><span id="player-8-name" data-pg-name="Player 8 name" class="player-name">Player #8</span></div></div></div><div id="player-9-container" data-pg-name="Player 9 container" style="margin-left: 15%; top: 50px; left: 0px" class="player-container"><div class="drag-box-container" id="drag-box-player-9-container"><div class="drag-box" id="drag-box-player-9" data-toggle="modal" data-target="#myModal" data-id="player-9"></div><div class="player-info-container" id="player-9-info-container" data-pg-name="Player 9 info container"><div id="player-9-element-container" class="player-element-container"></div><span id="player-9-name" data-pg-name="Player 9 name" class="player-name">Player #9</span></div></div></div><div id="player-10-container" data-pg-name="Player 10 container" style="top: 50px; justify-self: center;" class="player-container"><div class="drag-box-container" id="drag-box-player-10-container"><div class="drag-box" id="drag-box-player-10" data-toggle="modal" data-target="#myModal" data-id="player-10"></div><div class="player-info-container" id="player-10-info-container" data-pg-name="Player 10 info container"><div id="player-10-element-container" class="player-element-container"></div><span id="player-10-name" data-pg-name="Player 10 name" class="player-name">Player #10</span></div></div></div><div id="player-11-container" data-pg-name="Player 11 container" style="margin-right: 15%; top: 50px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-11-container"><div class="drag-box" id="drag-box-player-11" data-toggle="modal" data-target="#myModal" data-id="player-11"></div><div class="player-info-container" id="player-11-info-container" data-pg-name="Player 11 info container"><div id="player-11-element-container" class="player-element-container"></div><span id="player-11-name" data-pg-name="Player 11 name" class="player-name">Player #11</span></div></div></div>'
    },
    {
        name: '5-3-2 (F-Death Zone)',
        html: '<div id="player-1-container" data-pg-name="Player 1 container" style="justify-self: center; bottom: 0;" class="player-container"><div class="drag-box-container" id="drag-box-player-1-container"><div class="drag-box" id="drag-box-player-1" data-toggle="modal" data-target="#myModal" data-id="player-1"></div><div class="player-info-container" id="player-1-info-container" data-pg-name="Player 1 info container"><div id="player-1-element-container" class="player-element-container"></div><span id="player-1-name" data-pg-name="Player 1 name" class="player-name">Player #1</span></div></div></div><div id="player-2-container" data-pg-name="Player 2 container" style="margin-left: 7%; bottom: 210px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-2-container"><div class="drag-box" id="drag-box-player-2" data-toggle="modal" data-target="#myModal" data-id="player-2"></div><div class="player-info-container" id="player-2-info-container" data-pg-name="Player 2 info container"><div id="player-2-element-container" class="player-element-container"></div><span id="player-2-name" data-pg-name="Player 2 name" class="player-name">Player #2</span></div></div></div><div id="player-3-container" data-pg-name="Player 3 container" style="margin-left: 23.5%; bottom: 90px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-3-container"><div class="drag-box" id="drag-box-player-3" data-toggle="modal" data-target="#myModal" data-id="player-3"></div><div class="player-info-container" id="player-3-info-container" data-pg-name="Player 3 info container"><div id="player-3-element-container" class="player-element-container"></div><span id="player-3-name" data-pg-name="Player 3 name" class="player-name">Player #3</span></div></div></div><div id="player-4-container" data-pg-name="Player 4 container" style="margin-right: 23.5%; bottom: 90px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-4-container"><div class="drag-box" id="drag-box-player-4" data-toggle="modal" data-target="#myModal" data-id="player-4"></div><div class="player-info-container" id="player-4-info-container" data-pg-name="Player 4 info container"><div id="player-4-element-container" class="player-element-container"></div><span id="player-4-name" data-pg-name="Player 4 name" class="player-name">Player #4</span></div></div></div><div id="player-5-container" data-pg-name="Player 5 container" style="margin-right: 7%; bottom: 210px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-5-container"><div class="drag-box" id="drag-box-player-5" data-toggle="modal" data-target="#myModal" data-id="player-5"></div><div class="player-info-container" id="player-5-info-container" data-pg-name="Player 5 info container"><div id="player-5-element-container" class="player-element-container"></div><span id="player-5-name" data-pg-name="Player 5 name" class="player-name">Player #5</span></div></div></div><div id="player-6-container" data-pg-name="Player 6 container" style="justify-self: center; bottom: 260px;" class="player-container"><div class="drag-box-container" id="drag-box-player-6-container"><div class="drag-box" id="drag-box-player-6" data-toggle="modal" data-target="#myModal" data-id="player-6"></div><div class="player-info-container" id="player-6-info-container" data-pg-name="Player 6 info container"><div id="player-6-element-container" class="player-element-container"></div><span id="player-6-name" data-pg-name="Player 6 name" class="player-name">Player #6</span></div></div></div><div id="player-7-container" data-pg-name="Player 7 container" style="top: 330px; justify-self: center;" class="player-container"><div class="drag-box-container" id="drag-box-player-7-container"><div class="drag-box" id="drag-box-player-7" data-toggle="modal" data-target="#myModal" data-id="player-7"></div><div class="player-info-container" id="player-7-info-container" data-pg-name="Player 7 info container"><div id="player-7-element-container" class="player-element-container"></div><span id="player-7-name" data-pg-name="Player 7 name" class="player-name">Player #7</span></div></div></div><div id="player-8-container" data-pg-name="Player 8 container" style="margin-left: 7%; top: 250px; left: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-8-container"><div class="drag-box" id="drag-box-player-8" data-toggle="modal" data-target="#myModal" data-id="player-8"></div><div class="player-info-container" id="player-8-info-container" data-pg-name="Player 8 info container"><div id="player-8-element-container" class="player-element-container"></div><span id="player-8-name" data-pg-name="Player 8 name" class="player-name">Player #8</span></div></div></div><div id="player-9-container" data-pg-name="Player 9 container" style="margin-right: 7%; top: 250px; right: 0px" class="player-container"><div class="drag-box-container" id="drag-box-player-9-container"><div class="drag-box" id="drag-box-player-9" data-toggle="modal" data-target="#myModal" data-id="player-9"></div><div class="player-info-container" id="player-9-info-container" data-pg-name="Player 9 info container"><div id="player-9-element-container" class="player-element-container"></div><span id="player-9-name" data-pg-name="Player 9 name" class="player-name">Player #9</span></div></div></div><div id="player-10-container" data-pg-name="Player 10 container" style="top: 50px; left:0; margin-left: 28%;" class="player-container"><div class="drag-box-container" id="drag-box-player-10-container"><div class="drag-box" id="drag-box-player-10" data-toggle="modal" data-target="#myModal" data-id="player-10"></div><div class="player-info-container" id="player-10-info-container" data-pg-name="Player 10 info container"><div id="player-10-element-container" class="player-element-container"></div><span id="player-10-name" data-pg-name="Player 10 name" class="player-name">Player #10</span></div></div></div><div id="player-11-container" data-pg-name="Player 11 container" style="margin-right: 28%; top: 50px; right: 0px;" class="player-container"><div class="drag-box-container" id="drag-box-player-11-container"><div class="drag-box" id="drag-box-player-11" data-toggle="modal" data-target="#myModal" data-id="player-11"></div><div class="player-info-container" id="player-11-info-container" data-pg-name="Player 11 info container"><div id="player-11-element-container" class="player-element-container"></div><span id="player-11-name" data-pg-name="Player 11 name" class="player-name">Player #11</span></div></div></div>'
    },
    {
        name: "b",
        html: "a"
    },
    {
        name: "c",
        html: "a"
    },
    {
        name: "d",
        html: "a"
    },
    {
        name: "e",
        html: "a"
    },
    {
        name: "f",
        html: "a"
    },
    {
        name: "g",
        html: "a"
    }
];