// Mail Pilot Version 11 - 
// AUTHOR NAME:  Tom Tsiliopoulos
// Last Modified: October 30th
// Mail Pilot Version 11 Description - Game Template

module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "space", src: "assets/images/background.png" },
        { id: "star", src: "assets/images/goldenstar.png" },
        { id: "ship", src: "assets/images/ship.png" },
        { id: "asteroid", src: "assets/images/asteroid.png" },
        { id: "engine", src: "assets/sounds/RocketThrusters.ogg" },
        { id: "thunder", src: "assets/sounds/explode.ogg" },
        { id: "yay", src: "assets/sounds/power.ogg" }
    ];

    // ButtonPage Data Sheet
    //Display images based on locations on image
    var spriteSheetData = {
        "images": ["assets/images/buttonpage.png"],
        "frames": [
            [9, 10, 208, 65],
            [20, 86, 213, 69],
            [8, 160, 220, 80]
 
        ],
        "animations": {
            "instructionsButton": [0],
            "playButton": [1],
            "tryAgainButton": [2]
        }
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 