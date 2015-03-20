/// <reference path="../objects/asteroid.ts" />
/// <reference path="../objects/star.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />

// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ship: objects.Ship;
        private star: objects.Star;
        private asteroids = [];
        private scoreboard: objects.Scoreboard;

        constructor(ship: objects.Ship, star: objects.Star, asteroids, scoreboard: objects.Scoreboard) {
            this.ship = ship;
            this.star = star;
            this.asteroids = asteroids;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }

        // check collision between ship and any asteroid object
        private shipAndAsteroid(asteroid: objects.Asteroid) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = asteroid.image.x;
            p2.y = asteroid.image.y;
            if (this.distance(p1, p2) < ((this.ship.height * 0.5) + (asteroid.height * 0.5))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                asteroid.reset();
            }
        }

        // check collision between ship and star
        private shipAndStar() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = this.star.image.x;
            p2.y = this.star.image.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.star.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.star.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ASTEROID_NUM; count++) {
                this.shipAndAsteroid(this.asteroids[count]);
            }
            this.shipAndStar();
        }
    }
} 