let config = {
    type:Phaser.CANVAS,
    width:800,
    height:600,
    physics: {
        default:'arcade',
        
    },

    // this loads the other js files so add mapG and battleG later
    scene: [ menuG ],
    render: {
        pixelArt: true
    }
};

let game = new Phaser.Game(config);



// let game = new Phaser.Game(640, 360, Phaser.AUTO);

// let GameState = {
//     // making sure images are preloaded
//     preload: function() {

//     },
//     create: function() {

//     },
//     update: function() {

//     }
// };

// game.state.add('GameState', GameState);
// game.state.start('GameState');
