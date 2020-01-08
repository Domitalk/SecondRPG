// import { CST } from '../CST';

class MapScene extends Phaser.Scene {
    constructor(){
        super({
            // key: CST.SCENES.MAP
            key: 'MAP'
        });
    }
    init () { 
        // pass through args come here
    }
    preload(){
        // assets

        this.load.spritesheet("walking2424", './assets/images/walking2424.png', {frameHeight: 24, frameWidth: 24})
        
        this.load.image('tiles', './assets/maps/[Base]BaseChip_pipo.png')
        this.load.tilemapTiledJSON('mappy', './assets/maps/map.json')

        this.load.spritesheet('enemy', './assets/images/orig-red_cap-NESW.png', {frameHeight:32, frameWidth: 24})

        
    }
    create() {

        //game objects
        this.anims.create({
            key: "walkUp",
            frames: this.anims.generateFrameNumbers('walking2424', {
                start: 0, 
                end: 3
            }),
            frameRate: 10
        })
        this.anims.create({
            key: "walkDown",
            frames: this.anims.generateFrameNumbers('walking2424', {
                start: 4, 
                end: 7
            }),
            frameRate: 10
        })
        this.anims.create({
            key: "walkRight",
            frames: this.anims.generateFrameNumbers('walking2424', {
                start: 8, 
                end: 11
            }),
            frameRate: 10
        })
        this.anims.create({
            key: "walkLeft",
            frames: this.anims.generateFrameNumbers('walking2424', {
                start: 12, 
                end: 15
            }),
            frameRate: 10
        })
        this.anims.create({
            key: 'enemy1', 
            frames: this.anims.generateFrameNumbers('enemy', {
                start: 6,
                end: 8
            }),
            frameRate: 1
        })

        this.sprite1 = this.physics.add.sprite(this.game.renderer.height * 0.05, this.game.renderer.width * 0.95, 'walking2424').setDepth(1)
        // sprite1.play('walkRight')

        this.enemy1 = this.physics.add.sprite(this.game.renderer.height * .12, this.game.renderer.width * 0.95, 'enemy').setDepth(1)
        this.enemy1.setImmovable(true)
        
        // this.sprite1.setScale(2)

        // this.sprite1 = sprite1
        this.sprite1.setCollideWorldBounds(true)



        let mappy = this.add.tilemap("mappy");

        let tileset = mappy.addTilesetImage('[Base]BaseChip_pipo',  'tiles')

        let layerOne = mappy.createStaticLayer('Tile Layer 1', [tileset], 0, 0).setDepth(-1)
        let layerTwo = mappy.createStaticLayer('Tile Layer 2', [tileset], 0, 0) .setDepth(1)
        this.layerTwo = layerTwo


        this.keyboard = this.input.keyboard.addKeys("W, A, S, D")

        // // map collisions
        // this.physics.add.collider(this.sprite1, layerTwo)
        // layerTwo.setCollisionByProperty({collides:true})


        this.layerTwo.setCollisionBetween(1, 50);
        this.physics.add.collider(this.sprite1, this.layerTwo)


        // this.physics.add.collider(this.sprite1, this.enemy1)
        














    }
    update(delta) {
        this.physics.world.collide(this.sprite1, this.enemy1, this.firstEncounter)
        // this.physics.world.collide(this.sprite1, this.other_sprites, (this.sprite1, this.other_sprites)=>{
        //     DO SOMETHING ON COLLISON
        // })
        // you have to  .setImmovable(true) on the other NPC sprites so they don't move around
        if (this.keyboard.D.isDown === true) {
            // this.sprite1.x = this.sprite1.x + 0.1 * (delta / 1000)
            this.sprite1.setVelocityX(40)
            this.sprite1.play('walkRight', true)
        } else if (this.keyboard.A.isDown === true) {
            // this.sprite1.x = this.sprite1.x - 0.1 * (delta / 1000)
            this.sprite1.setVelocityX(-40)
            this.sprite1.play('walkLeft', true)
        } else if (this.keyboard.S.isDown === true ) {
            // this.sprite1.y = this.sprite1.y + 0.1 * (delta / 1000)
            this.sprite1.setVelocityY(40)
            this.sprite1.play('walkDown', true)
        } else if ( this.keyboard.W.isDown === true) {
            // this.sprite1.y = this.sprite1.y - 0.1 * (delta / 1000)
            this.sprite1.setVelocityY(-40)
            this.sprite1.play('walkUp', true)
        } else {
            this.sprite1.setVelocityX(0);
            this.sprite1.setVelocityY(0);
        }
        this.enemy1.play('enemy1', true)
        //updates at 16ms so event listeners on keydown for dynamic movement go here

        
    }
    firstEncounter = () => {


    }

}