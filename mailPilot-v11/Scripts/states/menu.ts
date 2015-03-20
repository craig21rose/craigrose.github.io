/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        ship.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
        space.update();
        ship.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;
        var gameNameLabel2: objects.Label;
        var gameNameLabel3: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "COSMIC POWER");
        game.addChild(gameNameLabel);
        
        //Display Instructions Label 
        gameNameLabel2 = new objects.Label(stage.canvas.width / 2, 120, "Instructions:");
        game.addChild(gameNameLabel2);

        //Display Instructions
        gameNameLabel3 = new objects.Label(stage.canvas.width / 2, 160, "Movement: Move Mouse Up or Down");
        game.addChild(gameNameLabel3);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
} 