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

    }

    create() {
        // now actually use those assets 
        this.add.image(0,0,'background').setOrigin(0).setDepth(0);

        let newButton = this.add.image (this.game.renderer.width / 2, this.game.renderer.height * 0.50, 'new_button').setDepth(1)
        let continueButton = this.add.image (this.game.renderer.width /2, this.game.renderer.height * 0.60, 'continue_button').setDepth(1)
        

        let hoverSprite = this.add.sprite(100,100, 'cat')
        hoverSprite.setScale(1.5)
        hoverSprite.setVisible(false)




        // this is where I can set up everything. 

        // the intial setup of the menu screen with a helper method 
        // makeMenu1()
        
        this.anims.create({
            key: 'walk',
            frameRate: 4,
            repeat: -1, // forever
            frames: this.anims.generateFrameNumbers('cat', {
                frames: [0,1,2]
            }) 
        })
        
        this.sound.play('menu_music', {
            loop: true
        })


        // this will add a event listener on "D"
        // this.input.keyboard.on('keyup_D', function(event) {
        //     this.image.x += 10;
        // }, this);


        // this one is different, makes an event which will be listened to on update
        // this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        

        // this code listens for the pointer and does whatever
        // this.input.on('pointerdown', function(event) {
        //     this.image.x = event.x;
        //     this.image.y = event.y;
        // }, this);

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
            console.log('NEW')

            let username = prompt('What is your name?')

            if (username) {
                newButton.setVisible(false)
                continueButton.setVisible(false)
                

                ////
                //// choose class, archer, mage, knight 
                ////

                let axeIcon = this.add.image (this.game.renderer.width * 0.30, this.game.renderer.height * 0.50, 'axe').setDepth(1)
                axeIcon.setScale(0.2, 0.2)

                let bowIcon = this.add.image (this.game.renderer.width * 0.45, this.game.renderer.height * 0.50, 'bow').setDepth(1)
                bowIcon.setScale(0.2, 0.2)

                let wandIcon = this.add.image (this.game.renderer.width * 0.60, this.game.renderer.height * 0.50, 'wand').setDepth(1)
                wandIcon.setScale(0.2, 0.2)
                ///
                /// fetch, + change scene 
                ///


            }
            

        })

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
            console.log('CONT.')

            // continueButton.setVisible(false)
            // newButton.setVisible(false)

        })
    }

    update(delta) {
        // update is going to listen for event

        // if (this.key_A.isDown) {
        //     this.image.x--;
        // }


        // this method is probably much better for the map scene.


    }

    
}
