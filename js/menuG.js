class menuG extends Phaser.Scene {
    constructor() {
        // now the mian.js file can call this scene by name
        super({key:'menuG'});
    }

    preload(){
        // add assets here later like mp3, mpg, jpg in order to preload it so there is no lag 
        this.load.image('background', './assets/images/backgroundimage.png');

        this.load.image('new_button', './assets/images/newbutton.png');

        this.load.image('continue_button', './assets/images/continuebutton.png');

        this.load.spritesheet('cat', './assets/images/cat_white-32x32.png', {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.audio('menu_music', './assets/01_Rising_Sun.mp3')
        
        this.load.image('axe', './assets/images/upg_axe.png')

        this.load.image('bow', './assets/images/upg_bow.png')

        this.load.image('wand', './assets/images/wand.png')

        this.load.image('pick_icon', './assets/images/pickicon.png')

        this.load.image('back_button', './assets/images/backbutton.png')

        this.load.image('highscore', './assets/images/highscore.png')
    }

    create() {
        // now actually use those assets 
        this.add.image(0,0,'background').setOrigin(0).setDepth(0);

        let newButton = this.add.image (this.game.renderer.width / 2, this.game.renderer.height * 0.50, 'new_button').setDepth(1)
        let continueButton = this.add.image (this.game.renderer.width /2, this.game.renderer.height * 0.60, 'continue_button').setDepth(1)
        let highscoreButton = this.add.image (this.game.renderer.width /2, this.game.renderer.height * 0.70, 'highscore').setDepth(1)

        let hoverSprite = this.add.sprite(100,100, 'cat')
        hoverSprite.setScale(1.5)
        hoverSprite.setVisible(false)

        this.add.text(this.game.renderer.width * 0.19 , this.game.renderer.height * 0.15, 'FULL STACK QUEST ', { fontFamily: 'Verdana', fontSize: 40 , color: '#000000' })


        // this is where I can set up everything. 

        this.anims.create({
            key: 'walk',
            frameRate: 4,
            repeat: -1, // forever
            frames: this.anims.generateFrameNumbers('cat', {
                frames: [0,1,2]
            }) 
        })
        this.anims.create({
            key: 'upWalk',
            frameRate: 4,
            repeat: -1, // forever
            frames: this.anims.generateFrameNumbers('cat', {
                frames: [3,4,5]
            }) 
        })
        
        this.sound.play('menu_music', {
            loop: true
        })

        // this one is different, makes an event which will be listened to on update
        // this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        // event listeners for keyboard
        // this.input.keyboard.on('keyup', function(event) {
        //     if (e.key == '') {

        //     }
        // }, this)

        newButton.setInteractive();
        newButton.on('pointerover', () => {
            hoverSprite.setVisible(true)
            hoverSprite.play('walk')
            hoverSprite.x = newButton.x - newButton.width;
            hoverSprite.y = newButton.y;

        })
        newButton.on('pointerout', () => {
            hoverSprite.setVisible(false)
        })
        newButton.on('pointerdown', () => {

            let username = prompt('What is your name?')

            if (username) {
                newButton.setVisible(false)
                continueButton.setVisible(false)
                highscoreButton.setVisible(false)
                
                let pickIcon = this.add.text (this.game.renderer.width * 0.30, this.game.renderer.height * 0.30, 'Choose a class', { fontFamily: 'Verdana', fontSize: 30 , color: '#000000' })
        
                let axeIcon = this.add.image (this.game.renderer.width * 0.30, this.game.renderer.height * 0.50, 'axe').setDepth(1).setScale(0.2, 0.2).setInteractive()
                axeIcon.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('upWalk')
                    hoverSprite.x = this.game.renderer.width * 0.30;
                    hoverSprite.y = this.game.renderer.height * 0.65;
        
                }, this)
        
                let bowIcon = this.add.image (this.game.renderer.width * 0.45, this.game.renderer.height * 0.50, 'bow').setDepth(1).setScale(0.2, 0.2).setInteractive()
                bowIcon.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('upWalk')
                    hoverSprite.x = this.game.renderer.width * 0.45;
                    hoverSprite.y = this.game.renderer.height * 0.65;
        
                }, this)
        
                let wandIcon = this.add.image (this.game.renderer.width * 0.60, this.game.renderer.height * 0.50, 'wand').setDepth(1).setScale(0.2, 0.2).setInteractive()
                wandIcon.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('upWalk')
                    hoverSprite.x = this.game.renderer.width * 0.60;
                    hoverSprite.y = this.game.renderer.height * 0.65;
                }, this)

                let backToMainMenuButton = this.add.image (this.game.renderer.width * 0.50, this.game.renderer.height * 0.75, 'back_button').setDepth(1)
                backToMainMenuButton.setInteractive()
                backToMainMenuButton.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('walk')
                    hoverSprite.x = backToMainMenuButton.x - backToMainMenuButton.width;
                    hoverSprite.y = backToMainMenuButton.y;
                })
                backToMainMenuButton.on('pointerdown', () => {
                    newButton.setVisible(true)
                    continueButton.setVisible(true)
                    highscoreButton.setVisible(true)
                    hoverSprite.setVisible(false)
                    pickIcon.setVisible(false)
                    wandIcon.setVisible(false)
                    bowIcon.setVisible(false)
                    axeIcon.setVisible(false)
                    backToMainMenuButton.setVisible(false)
                })

                ///
                ///
                /// collect all the new character 
                /// info into a hash and pass it to fetch
                ///
                /// fetch, + change scene 
                ///
                ///

            }
        }, this)

        continueButton.setInteractive();
        continueButton.on('pointerover', () => {
            hoverSprite.setVisible(true)
            hoverSprite.play('walk')
            hoverSprite.x = continueButton.x - continueButton.width;
            hoverSprite.y = continueButton.y;       
        })
        continueButton.on('pointerout', () => {
            hoverSprite.setVisible(false)   
        })
        continueButton.on('pointerdown', () => {

            let continuePrompt = prompt('What was the name on savefile?')

            if (continuePrompt) {
                newButton.setVisible(false)
                continueButton.setVisible(false)
                highscoreButton.setVisible(false)

                //// fetch savestate 

                /// click savestate and go to start new scene

            }
        }, this)

        highscoreButton.setInteractive()
        highscoreButton.on('pointerover', () => {
            hoverSprite.setVisible(true)
            hoverSprite.play('walk')
            hoverSprite.x = highscoreButton.x - highscoreButton.width;
            hoverSprite.y = highscoreButton.y;
        })
        highscoreButton.on('pointerdown', () => {


            /// highscore functionality 

        })
    }



    update(delta) {
        // update is going to listen for event

        // if (this.key_A.isDown) {
        //     this.image.x--;
        // }


        // this method is probably much better for the map scene.


    }

    //////helper functions? 


    
}
