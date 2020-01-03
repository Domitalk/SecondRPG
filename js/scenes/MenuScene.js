// import { CST } from '../CST';

class MenuScene extends Phaser.Scene {
    constructor() {
        // now the mian.js file can call this scene by name
        super({
            // key: CST.SCENES.MENU
            key: "MENU"
        });

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
        
        this.load.image('axe', './assets/images/upg_sword.png')

        this.load.image('bow', './assets/images/upg_bow.png')

        this.load.image('wand', './assets/images/wand.png')

        this.load.image('pick_icon', './assets/images/pickicon.png')

        this.load.image('back_button', './assets/images/backbutton.png')

        this.load.image('highscore', './assets/images/highscore.png')

        this.load.image('gameTitle', './assets/images/gametitle.png')

        this.load.image('start_button', './assets/images/start.png')
    }

    create() {
        // now actually use those assets 
        this.add.image(0,0,'background').setOrigin(0).setDepth(0);

        let newButton = this.add.image (this.game.renderer.width / 2, this.game.renderer.height * 0.50, 'new_button').setDepth(1)
        let continueButton = this.add.image (this.game.renderer.width /2, this.game.renderer.height * 0.60, 'continue_button').setDepth(1)
        // let highscoreButton = this.add.image (this.game.renderer.width /2, this.game.renderer.height * 0.70, 'highscore').setDepth(1)

        let hoverSprite = this.add.sprite(100,100, 'cat')
        hoverSprite.setScale(1.5)
        hoverSprite.setVisible(false)

        let gametitle = this.add.image (this.game.renderer.width * 0.5 , this.game.renderer.height * 0.15, 'gameTitle').setDepth(1)

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

            let startButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.70, 'start_button').setDepth(2)
            startButton.setInteractive()
            // let username = prompt('What is your name?')
            let inputBox = document.createElement('INPUT')
            inputBox.id = 'inputBox'
            let mainBody = document.querySelector('body')
            mainBody.append(inputBox)

            inputBox.style.position = "absolute"
            inputBox.style.top = this.game.renderer.width * 0.50
            inputBox.style.left = this.game.renderer.height * 0.26
            inputBox.style.height = this.game.renderer.height * 0.10
            inputBox.style.width = this.game.renderer.width * 0.5
            inputBox.style.fontSize = "35px"
            inputBox.style.backgroundColor = 'silver'

            newButton.setVisible(false)
            continueButton.setVisible(false)
            // highscoreButton.setVisible(false)

            let backButton1a = this.add.image(this.game.renderer.width * 0.50, this.game.renderer.height * 0.85, 'back_button').setDepth(1)
            backButton1a.setInteractive()
            backButton1a.on('pointerover', () => {
                hoverSprite.setVisible(true)
                hoverSprite.play('walk')
                hoverSprite.x = backButton1a.x - backButton1a.width;
                hoverSprite.y = backButton1a.y;
            })
            backButton1a.on('pointerdown', () => {
                startButton.setVisible(false)
                backButton1a.setVisible(false)
                inputBox.hidden = 'hidden'
                newButton.setVisible(true)
                continueButton.setVisible(true)
                hoverSprite.setVisible(false)
            })
            backButton1a.on('pointerout', () => {
                hoverSprite.setVisible(false)   
            })
            
            startButton.on('pointerover', () => {
                hoverSprite.setVisible(true)
                hoverSprite.play('walk')
                hoverSprite.x = startButton.x - (startButton.width * 0.70);
                hoverSprite.y = startButton.y;
            })

            startButton.on('pointerout', () => {
                hoverSprite.setVisible(false)   
            })

            startButton.on('pointerdown', () => {
                backButton1a.setVisible(false)
                startButton.setVisible(false)
                inputBox.hidden = 'hidden'

                let pickIcon = this.add.text (this.game.renderer.width * 0.30, this.game.renderer.height * 0.30, 'Choose a class', { fontFamily: 'Verdana', fontSize: 30 , color: '#000000' })
        
                let axeIcon = this.add.image (this.game.renderer.width * 0.30, this.game.renderer.height * 0.50, 'axe').setDepth(2).setScale(0.2, 0.2).setInteractive()
                
                axeIcon.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('upWalk')
                    hoverSprite.x = this.game.renderer.width * 0.30;
                    hoverSprite.y = this.game.renderer.height * 0.65;
        
                }, this)
                
                axeIcon.on('pointerout', () => {
                    hoverSprite.setVisible(false)   
                })

                axeIcon.on('pointerdown', () => {
                    pickIcon.setVisible(false)
                    wandIcon.setVisible(false)
                    bowIcon.setVisible(false)
                    axeIcon.setVisible(false)
                    backToMainMenuButton.setVisible(false)
                    // console.log(inputBox.value)
                    fetch("http://localhost:3000/players", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: `${inputBox.value}`,
                            fight_type: 'Knight'
                        })
                    })
                    .then(r => r.json())
                    .then((response) => {
                        // console.log(response)
    
                        this.scene.start("MAP", response)

                    })
                })
        
                let bowIcon = this.add.image (this.game.renderer.width * 0.45, this.game.renderer.height * 0.50, 'bow').setDepth(1).setScale(0.2, 0.2).setInteractive()
                
                bowIcon.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('upWalk')
                    hoverSprite.x = this.game.renderer.width * 0.45;
                    hoverSprite.y = this.game.renderer.height * 0.65;
        
                }, this)
                
                bowIcon.on('pointerout', () => {
                    hoverSprite.setVisible(false)   
                })

                bowIcon.on('pointerdown', () => {
                    pickIcon.setVisible(false)
                    wandIcon.setVisible(false)
                    bowIcon.setVisible(false)
                    axeIcon.setVisible(false)
                    backToMainMenuButton.setVisible(false)
                    // console.log(inputBox.value)
                    fetch("http://localhost:3000/players", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: `${inputBox.value}`,
                            fight_type: 'Archer'
                        })
                    })
                    .then(r => r.json())
                    .then((response) => {
                        // console.log(response)
                        // console.log(response.id)
                        this.scene.start("MAP", response)

                    })

                })
        
                let wandIcon = this.add.image (this.game.renderer.width * 0.60, this.game.renderer.height * 0.50, 'wand').setDepth(1).setScale(0.2, 0.2).setInteractive()
                
                wandIcon.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('upWalk')
                    hoverSprite.x = this.game.renderer.width * 0.60;
                    hoverSprite.y = this.game.renderer.height * 0.65;
                }, this)
                wandIcon.on('pointerout', () => {
                    hoverSprite.setVisible(false)   
                })
                wandIcon.on('pointerdown', () => {
                    pickIcon.setVisible(false)
                    wandIcon.setVisible(false)
                    bowIcon.setVisible(false)
                    axeIcon.setVisible(false)
                    backToMainMenuButton.setVisible(false)
                    // console.log(inputBox.value)
                    fetch("http://localhost:3000/players", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'accept': 'application/json'
                        },
                        body: JSON.stringify({
                            name: `${inputBox.value}`,
                            fight_type: 'Mage'
                        })
                    })
                    .then(r => r.json())
                    .then((response) => {
                        // console.log(response)
                        // console.log(response.id)
                        this.scene.start("MAP", response)

                    })
                })

                let backToMainMenuButton = this.add.image (this.game.renderer.width * 0.50, this.game.renderer.height * 0.75, 'back_button').setDepth(1)
                
                backToMainMenuButton.setInteractive()
                
                backToMainMenuButton.on('pointerover', () => {
                    hoverSprite.setVisible(true)
                    hoverSprite.play('walk')
                    hoverSprite.x = backToMainMenuButton.x - backToMainMenuButton.width;
                    hoverSprite.y = backToMainMenuButton.y;
                })

                backToMainMenuButton.on('pointerout', () => {
                    hoverSprite.setVisible(false)   
                })

                backToMainMenuButton.on('pointerdown', () => {
                    // newButton.setVisible(true)
                    // continueButton.setVisible(true)
                    // highscoreButton.setVisible(true)

                    startButton.setVisible(true)
                    inputBox.hidden = ''
                    pickIcon.setVisible(false)
                    wandIcon.setVisible(false)
                    bowIcon.setVisible(false)
                    axeIcon.setVisible(false)
                    backToMainMenuButton.setVisible(false)
                    backButton1a.setVisible(true)
                })
            }, this)
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

            continueButton.setVisible(false)
            newButton.setVisible(false)

            let continueBox = document.createElement('INPUT')
            continueBox.id = 'continueBox'
            let mainBody = document.querySelector('body')
            mainBody.append(continueBox)
            // let continuePrompt = prompt('What was the name on savefile?')
            continueBox.style.position = "absolute"
            continueBox.style.top = this.game.renderer.width * 0.50
            continueBox.style.left = this.game.renderer.height * 0.26
            continueBox.style.height = this.game.renderer.height * 0.10
            continueBox.style.width = this.game.renderer.width * 0.5
            continueBox.style.fontSize = "35px"
            continueBox.style.backgroundColor = 'silver'


            let startFromContinue = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.70, 'start_button').setDepth(2)
            startFromContinue.setInteractive()

            startFromContinue.on('pointerover', () => {
                hoverSprite.setVisible(true)
                hoverSprite.play('walk')
                hoverSprite.x = startFromContinue.x - (startFromContinue.width * 0.70);
                hoverSprite.y = startFromContinue.y;
            })

            startFromContinue.on('pointerout', () => {
                hoverSprite.setVisible(false)   
            })

            startFromContinue.on('pointerdown', () => {


                //// confirmation that it is the savefile


                //// change scene and start the game with the savefile

            })

            let backButton2a = this.add.image(this.game.renderer.width * 0.50, this.game.renderer.height * 0.85, 'back_button').setDepth(1)
            backButton2a.setInteractive()
            backButton2a.on('pointerover', () => {
                hoverSprite.setVisible(true)
                hoverSprite.play('walk')
                hoverSprite.x = backButton2a.x - backButton2a.width;
                hoverSprite.y = backButton2a.y;
            })
            backButton2a.on('pointerdown', () => {
                startFromContinue.setVisible(false)
                backButton2a.setVisible(false)
                continueBox.hidden = 'hidden'
                newButton.setVisible(true)
                continueButton.setVisible(true)
                hoverSprite.setVisible(false)
            })
            backButton2a.on('pointerout', () => {
                hoverSprite.setVisible(false)   
            })


        }, this)

        // highscoreButton.setInteractive()
        // highscoreButton.on('pointerover', () => {
        //     hoverSprite.setVisible(true)
        //     hoverSprite.play('walk')
        //     hoverSprite.x = highscoreButton.x - highscoreButton.width;
        //     hoverSprite.y = highscoreButton.y;
        // })
        // highscoreButton.on('pointerdown', () => {

        //     /// highscore functionality 

        // })
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
