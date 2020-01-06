
/** @type {import('./phaser')} */

// import { MenuScene } from './scenes/MenuScene';
// import { MapScene } from './scenes/MapScene';

let config = {
    type:Phaser.CANVAS,
    width:704,
    height:704,
    physics: {
        default:'arcade',
        arcade: {
            debug: true
        }
    },

    // this loads the other js files so add mapG and battleG later
    
    scene: [ 
        MenuScene, 
        MapScene
    ],
    
    render: {
        pixelArt: true
    }
};

let game = new Phaser.Game(config);


