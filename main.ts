namespace SpriteKind {
    export const tower = SpriteKind.create()
    export const tawer2 = SpriteKind.create()
    export const tower3 = SpriteKind.create()
    export const tower4 = SpriteKind.create()
    export const tower5 = SpriteKind.create()
    export const tower6 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. 8 . . . . . . . . . . . . 8 . 
. 8 . 8 . . . . . . . . 8 . 8 . 
. 8 . . 8 . . . . . . 8 . . 8 . 
. 8 . . . 8 . . . . 8 . . . 8 . 
. 8 . . . . 8 . . 8 . . . . 8 . 
. 8 . . . . . . . . . . . . 8 . 
. 8 . . . . . . . . . . . . 8 . 
. 8 . . . . 8 . . 8 . . . . 8 . 
. 8 . . . 8 . . . . 8 . . . 8 . 
. 8 . . 8 . . . . . . 8 . . 8 . 
. 8 . 8 . . . . . . . . 8 . 8 . 
. 8 . . . . . . . . . . . . 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onCreated(SpriteKind.tawer2, function (sprite) {
    sprite.lifespan = Math.randomRange(800, 1200)
})
function doSomething3 (mySprite: Sprite) {
    if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile0)) {
        atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        atake.setPosition(mySprite.x, mySprite.y)
        atake.setVelocity(-50, 0)
    } else {
        if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile0)) {
            atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
            atake.setPosition(mySprite.x, mySprite.y)
            atake.setVelocity(50, 0)
        } else {
            if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile0)) {
                atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                atake.setPosition(mySprite.x, mySprite.y)
                atake.setVelocity(0, -50)
            } else {
                if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile0)) {
                    atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                    atake.setPosition(mySprite.x, mySprite.y)
                    atake.setVelocity(0, 50)
                }
            }
        }
    }
}
sprites.onDestroyed(SpriteKind.tower5, function (sprite) {
    doSomething2(sprite)
    firre(sprite)
})
sprites.onDestroyed(SpriteKind.tower4, function (sprite) {
    doSomething2(sprite)
    doSomething4(sprite)
})
function emmny_spon () {
    mySprite2 = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    sprites.setDataNumber(mySprite2, "life", all_life)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
    animation.runImageAnimation(
    mySprite2,
    [img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 3 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`,img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`],
    100,
    true
    )
    scene.followPath(mySprite2, the_path, Emmy_speed)
    sprites.setDataNumber(mySprite2, "life", Math.randomRange(1, Math.randomRange(1, Math.randomRange(1, 2))))
    if (Emmy_speed == 100) {
        leval(mySprite)
    } else {
        Emmy_speed += Math.randomRange(2, 4)
    }
    if (!(Emmy_speed_2 == 500)) {
        Emmy_speed_2 += -1
    }
}
sprites.onCreated(SpriteKind.tower5, function (sprite) {
    sprite.lifespan = Math.randomRange(450, 700)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (togle == 6) {
        togle = 0
    }
    togle += 1
})
sprites.onCreated(SpriteKind.tower6, function (sprite) {
    if (sprite.tileKindAt(TileDirection.Left, sprites.castle.tileGrass2)) {
    	
    } else {
        sprite.lifespan = Math.randomRange(1000, 1600)
    }
})
function boss () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    sprites.setDataNumber(mySprite2, "life", all_life)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
    animation.runImageAnimation(
    mySprite2,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f f f c d b 1 b c 1 1 1 c f . . . . 
. . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . . 
. . . . f 1 b 1 b 1 f f f f b f b f b f . . . . 
. . . . f b f b f f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    scene.followPath(mySprite2, the_path, Emmy_speed)
    sprites.setDataNumber(mySprite2, "life", Math.randomRange(2, 4))
    if (Emmy_speed == 100) {
        leval(mySprite)
    } else {
        Emmy_speed += Math.randomRange(1, 2)
    }
    if (!(Emmy_speed_2 == 500)) {
        Emmy_speed_2 += -1
    }
}
function emmny_spon2 () {
    mySprite2 = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    sprites.setDataNumber(mySprite2, "life", all_life)
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
    animation.runImageAnimation(
    mySprite2,
    [img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 3 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`,img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`],
    100,
    true
    )
    scene.followPath(mySprite2, the_path, Emmy_speed)
    sprites.setDataNumber(mySprite2, "life", Math.randomRange(1, Math.randomRange(1, 3)))
    if (Emmy_speed == 100) {
        leval(mySprite)
    } else {
        Emmy_speed += Math.randomRange(2, 4)
    }
    if (!(Emmy_speed_2 == 500)) {
        Emmy_speed_2 += -1
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    if (sprites.readDataNumber(otherSprite, "life") == 1) {
        otherSprite.destroy()
        info.changeScoreBy(1)
    } else {
        sprites.changeDataNumberBy(otherSprite, "life", -1)
        otherSprite.setImage(img`
. . . . c c c c c c . . . . . . 
. . . c 4 4 4 4 4 4 c . . . . . 
. . c 4 4 4 4 4 4 4 4 c . . . . 
. c 4 4 4 4 4 4 4 4 4 4 c . . . 
. c 4 c 4 4 4 4 c 4 4 4 c . . . 
. f 4 4 f 4 4 f 4 4 4 4 f . . . 
. f 4 4 4 4 4 4 4 4 4 4 f . . . 
. . f 4 4 4 4 4 c 4 4 4 f c . . 
. . . f c c c c 4 4 4 f 4 4 c . 
. . c 4 2 4 4 4 4 c f 4 4 4 4 c 
. c 4 4 2 4 4 c f c 4 4 4 4 c c 
c 1 1 1 1 4 4 f c c 4 4 4 c . . 
f 1 1 1 1 1 4 4 c 4 4 4 4 f . . 
f 4 1 1 1 1 1 4 4 4 4 4 c f . . 
. f 4 1 1 1 1 1 1 4 4 4 f . . . 
. . c c c c c c c c c f . . . . 
`)
        pause(80)
        otherSprite.setImage(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`)
    }
})
sprites.onCreated(SpriteKind.tower3, function (sprite) {
    sprite.lifespan = Math.randomRange(600, 900)
})
function doSomething () {
    if (togle == 1) {
        if (info.score() >= 5) {
            frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . 4 4 5 f f 5 5 5 . . . . . 
. . . . 4 5 f f 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tower)
            sprites.setDataNumber(frog, "speed", Math.randomRange(1000, 1400))
            tiles.placeOnTile(frog, build_locashoon)
            tiles.setTileAt(build_locashoon, sprites.castle.tileGrass2)
            info.changeScoreBy(-5)
        }
    } else if (togle == 2) {
        if (info.score() >= 10) {
            frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f b 1 f f f . . . . . 
. . . 4 4 f b 1 f f f . . . . . 
. . . . 4 f f f 1 f f . . . . . 
. . . . . f f 1 1 f f . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tawer2)
            tiles.placeOnTile(frog, build_locashoon)
            tiles.setTileAt(build_locashoon, sprites.castle.tileGrass2)
            info.changeScoreBy(-10)
        }
    } else if (togle == 3) {
        if (info.score() >= 15) {
            frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 6 1 2 2 2 . . . . . 
. . . 4 4 2 6 1 2 2 2 . . . . . 
. . . . 4 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tower3)
            tiles.placeOnTile(frog, build_locashoon)
            tiles.setTileAt(build_locashoon, sprites.castle.tileGrass2)
            info.changeScoreBy(-15)
        }
    } else if (togle == 4) {
        if (info.score() >= 20) {
            frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . 4 4 8 9 1 8 8 8 . . . . . 
. . . . 4 8 9 1 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tower4)
            tiles.placeOnTile(frog, build_locashoon)
            tiles.setTileAt(build_locashoon, sprites.castle.tileGrass2)
            info.changeScoreBy(-20)
        }
    } else if (togle == 5) {
        if (info.score() >= 25) {
            frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 f 9 d 1 1 . . . . . 
. . . 4 4 1 f 9 d 1 1 . . . . . 
. . . . 4 1 d d 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tower5)
            tiles.placeOnTile(frog, build_locashoon)
            tiles.setTileAt(build_locashoon, sprites.castle.tileGrass2)
            info.changeScoreBy(-25)
        }
    } else if (togle == 6) {
        if (info.score() >= 15) {
            frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e e . . . . . 
. . . . . e e e e e e . . . . . 
. . . . . e f 1 e e e . . . . . 
. . . 4 4 e f 1 d d d . . . . . 
. . . . 4 e d d e e e . . . . . 
. . . . . d e e 1 1 1 . . . . . 
. . . . . e 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.tower6)
            tiles.placeOnTile(frog, build_locashoon)
            tiles.setTileAt(build_locashoon, sprites.castle.tileGrass2)
            info.changeScoreBy(-15)
        } else {
        	
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (can_build) {
        doSomething()
    } else {
        if (destroy) {
            tiles.setTileAt(destroy_lac, sprites.castle.tileDarkGrass2)
            info.changeScoreBy(3)
        }
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.tower, function (sprite) {
    doSomething2(sprite)
    doSomething3(sprite)
})
sprites.onCreated(SpriteKind.tower, function (sprite) {
    sprite.lifespan = Math.randomRange(1000, 1400)
})
sprites.onDestroyed(SpriteKind.tower6, function (sprite) {
    doSomething2(sprite)
    firre(sprite)
})
function firre (mySprite: Sprite) {
    if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile0)) {
        atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        atake.setPosition(mySprite.x, mySprite.y)
        atake.setVelocity(-60, 0)
    } else {
        if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile0)) {
            atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
            atake.setPosition(mySprite.x, mySprite.y)
            atake.setVelocity(60, 0)
        } else {
            if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile0)) {
                atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 8 8 . . . . . . . . . . . . 
. 8 8 8 8 . . . . . . . . . . . 
. 8 8 8 8 . . . . . . . . . . . 
. . 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                atake.setPosition(mySprite.x, mySprite.y)
                atake.setVelocity(0, -60)
            } else {
                if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile0)) {
                    atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 8 8 . . . . . . . . . . . . 
. 8 8 8 8 . . . . . . . . . . . 
. 8 8 8 8 . . . . . . . . . . . 
. . 8 8 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                    atake.setPosition(mySprite.x, mySprite.y)
                    atake.setVelocity(0, 60)
                }
            }
        }
    }
    if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile0)) {
        atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        atake.setPosition(mySprite.x, mySprite.y)
        atake.setVelocity(-60, 0)
    } else {
        if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile0)) {
            atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 . . . . . . 
. . . . . . . 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
            atake.setPosition(mySprite.x, mySprite.y)
            atake.setVelocity(60, 0)
        } else {
            if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile0)) {
                atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 . . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . . 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                atake.setPosition(mySprite.x, mySprite.y)
                atake.setVelocity(0, -60)
            } else {
                if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile0)) {
                    atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 . . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . . 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                    atake.setPosition(mySprite.x, mySprite.y)
                    atake.setVelocity(0, 60)
                }
            }
        }
    }
}
sprites.onDestroyed(SpriteKind.tawer2, function (sprite) {
    doSomething2(sprite)
    doSomething3(sprite)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(false)
})
function leval (mySprite: Sprite) {
    tilemap2 += 1
    tilemap.loadMap(list[tilemap2])
    for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
        bass_lacashon = value
    }
    bass_lacashon = tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)[0]
    enemy_bass_lokashon = tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)[0]
    the_path = scene.aStar(enemy_bass_lokashon, bass_lacashon)
    losse = false
    Emmy_speed = 25
    Emmy_speed_2 = 2000
    togle = 1
    all_life = 2
    sekint = 0
    tilemap.destorySpritesOfKind(SpriteKind.Enemy)
    tilemap.destorySpritesOfKind(SpriteKind.tower)
    tilemap.destorySpritesOfKind(SpriteKind.tawer2)
    tilemap.destorySpritesOfKind(SpriteKind.tower3)
    tilemap.destorySpritesOfKind(SpriteKind.tower4)
    tilemap.destorySpritesOfKind(SpriteKind.tower5)
    info.setScore(20)
}
function doSomething2 (mySprite: Sprite) {
    new_sprite = sprites.create(mySprite.image, mySprite.kind())
    new_sprite.x = mySprite.x
    new_sprite.y = mySprite.y
}
sprites.onDestroyed(SpriteKind.tower3, function (sprite) {
    doSomething2(sprite)
    doSomething4(sprite)
})
sprites.onCreated(SpriteKind.tower4, function (sprite) {
    sprite.lifespan = Math.randomRange(500, 700)
})
function doSomething4 (mySprite: Sprite) {
    if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile0)) {
        atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        atake.setPosition(mySprite.x, mySprite.y)
        atake.setVelocity(-60, 0)
    } else {
        if (mySprite.tileKindAt(TileDirection.Right, myTiles.tile0)) {
            atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
            atake.setPosition(mySprite.x, mySprite.y)
            atake.setVelocity(60, 0)
        } else {
            if (mySprite.tileKindAt(TileDirection.Top, myTiles.tile0)) {
                atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                atake.setPosition(mySprite.x, mySprite.y)
                atake.setVelocity(0, -60)
            } else {
                if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile0)) {
                    atake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
                    atake.setPosition(mySprite.x, mySprite.y)
                    atake.setVelocity(0, 60)
                }
            }
        }
    }
}
let sekint = 0
let destroy_lac: tiles.Location = null
let destroy = false
let can_build = false
let build_locashoon: tiles.Location = null
let frog: Sprite = null
let mySprite2: Sprite = null
let atake: Sprite = null
let all_life = 0
let togle = 0
let Emmy_speed_2 = 0
let Emmy_speed = 0
let losse = false
let the_path: tiles.Location[] = []
let enemy_bass_lokashon: tiles.Location = null
let bass_lacashon: tiles.Location = null
let mySprite: Sprite = null
let tilemap2 = 0
let list: tilemap.WorldMap[] = []
let new_sprite: Sprite = null
new_sprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
list = [tilemap.createMap(tiles.createTilemap(
            hex`140010000101010101010101010101010101010101010101010101010100000001010000000000000000000101010101010003000101000000000000000000010101010101000000010100000001010100000001010101010100000001010000000101010000000101010101010000000201000000010101000000010101010101000000020100000001010200000001010101010100000002010004000101020000000101010101010000000101000000010102000000010101010102000000010101010101010100000001010101010200000001010101010101010000000101010101020000000101010101010101000000010101010101000000010101020202010100000001010101010100000000000000000000000000000109090101010000000000000000000000000000010209010101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1],
            TileScale.Sixteen
        )), tilemap.createMap(tiles.createTilemap(
            hex`14001e00010101010101010101010101010101010101010101010101010000000101000000000000000000010101010101000300010100000000000000000001010101010100000001010000000000000000000101010101010000000101000000010201000000010101010101000000010100000001010100000001010101010100000001010000000101010000000101010101010000000101000000010101000000010101010101000000010100000001010100000001010101010200000001010000000101010000000101010101020000000101000000020102000000010101010102000000010100000002010200000001010101010100000000000000000201020000000101010101010000000000000000010102000000010101010101000000000000000001010100000001010101010101010202020101010101010000000101010101010101010101010101010101000000010101010000000000000000000000000000000001010101000000000000000000000000000000000101010700000000000000000000000000000000010101070000000101010707070101010202020101010107000000010101010101010101010101010101010100000001010101010101010101010101010101010000000101010101010101010101010101010101000000010101010101010101010101010101010100000001010101010101010101010101010101010000000000000000010101010101010101010101000000000000040001010101010101010101010100000000000000000101010101010101010101010101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . . . . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . . . . . . 2 2 2 . . . 2 
2 2 2 2 2 . . . . . . . . 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileGrass2],
            TileScale.Sixteen
        )), tilemap.createMap(tiles.createTilemap(
            hex`14001e00010101010101010101010101010101010101010101010101010000000101000000000000000000010101010101000300010100000000000000000001010101010100000001010000000000000000000101010101010100000101000000010201000000010101010101010000010100000001010100000001010101010101000001010000000101010000000101010101010100000101000000010101000000010101010101010000010100000001010100000001010101010101000001010000000101010000000101010101010100000101000000020102000000010101010101010000010101000101010100010101010101010101000000000000010101010001010101010101010101010101000001010102000000010101010101010101010101010101010100000001010101010101010101010101010101010000000101010101010101010101010101010101000000010101010000000000000001010000000000000001010101000000000000000000000000000000000101010700000000000000010100000000000000010101070000000101010101010101010202020101010107000000010101010101010101010101010101010100000007010101010101010101010101010101010000000701010101010101010100000001010101000000070101010101010101010004000101010100000001010707070101010101000000010101010000000000000000000000000000000001010101000000000000000000000000000000000101010100000000000000000000000000000000010101010101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 . . . . . . 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . . . . . 2 2 . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . 2 2 . . . . . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileGrass2],
            TileScale.Sixteen
        )), tilemap.createMap(tiles.createTilemap(
            hex`14001e00010101010101010101010101010101010101010101010101010000000101000000000000000000010101010101000300010100000000000000000001010101010100000001010000000000000000000101010101010100000101000000010101000000010101010101010000010100000001010100000001010101010101000001010000000101010000000101010101010100000101000000010101000000010101010101020000010100000001010100000001010101010102000001010000000201010000000101010101010200000101000000020102000000010101010101010000010101000101010100010101010101010101000000000000010101010001010101010101010101010101000001010102000000010101010101010101010102010101010100000001010101010101010101010101010101010000000101010101010101010107010101010101000000010101010000000000000001010000000000000001010101000000000000000000000000000000000101010700000000000000010100000000000000010101070000000101010101010101020201010101010107000000010101010101010101010101010101010100000007010101010101010101010101010101010000000701010101010101010100000001010101000000070101010101010101010004000101010100000001010707070101010101000000010101010000000000000000000000000000000001010101000000000000000000000000000000000101010100000000000000000000000000000000010101010101010101010101010101010101010101`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . 2 2 . . . . . . . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 . . . 2 2 2 . . . 2 
2 2 2 2 2 2 . . 2 2 2 . 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 . . . . . . 2 2 2 2 . 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . . . . . 2 2 . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . 2 2 . . . . . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))]
tilemap2 = game.askForNumber("level", 1) - 1
tilemap.loadMap(list[tilemap2])
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.Ghost, true)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
    bass_lacashon = value
}
bass_lacashon = tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)[0]
enemy_bass_lokashon = tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal)[0]
the_path = scene.aStar(enemy_bass_lokashon, bass_lacashon)
losse = false
Emmy_speed = 25
Emmy_speed_2 = 2000
togle = 1
all_life = 1
info.setScore(20)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass2)) {
        can_build = true
        build_locashoon = tilemap.locationOfSprite(mySprite)
        if (togle == 1) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . 5 5 5 5 5 5 2 . . . . 
. . . 2 . 5 5 5 5 5 5 2 . . . . 
. . . 4 4 5 f f 5 5 5 2 . . . . 
. . . 2 4 5 f f 5 5 5 2 . . . . 
. . . 2 . 5 5 5 5 5 5 2 . . . . 
. . . 2 . 5 5 5 5 5 5 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (togle == 2) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . f f f f f f 2 . . . . 
. . . 2 . f b 1 f f f 2 . . . . 
. . . 4 4 f b 1 f f f 2 . . . . 
. . . 2 4 f f f 1 f f 2 . . . . 
. . . 2 . f f 1 1 f f 2 . . . . 
. . . 2 . f 1 1 1 1 f 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (togle == 3) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 8 8 2 2 8 8 8 . . . . 
. . . 8 . . 2 2 2 2 . 8 . . . . 
. . . 8 . 2 2 2 2 2 2 8 . . . . 
. . . 8 . 2 2 2 2 2 2 8 . . . . 
. . . 8 . 2 6 1 2 2 2 8 . . . . 
. . . 4 4 2 6 1 2 2 2 8 . . . . 
. . . 8 4 2 2 2 2 2 2 8 . . . . 
. . . 8 . 2 2 2 2 2 2 8 . . . . 
. . . 8 . 2 2 2 2 2 2 8 . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (togle == 4) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 8 8 2 2 2 . . . . 
. . . 2 . . 8 8 8 8 . 2 . . . . 
. . . 2 . 8 8 8 8 8 8 2 . . . . 
. . . 2 . 8 8 8 8 8 8 2 . . . . 
. . . 5 5 8 9 1 8 8 8 2 . . . . 
. . . 2 5 8 9 1 8 8 8 2 . . . . 
. . . 2 . 8 8 8 8 8 8 2 . . . . 
. . . 2 . 8 8 8 8 8 8 2 . . . . 
. . . 2 . 8 8 8 8 8 8 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (togle == 5) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . 1 1 1 1 1 2 . . . . 
. . . 2 . 1 1 1 1 1 1 2 . . . . 
. . . 2 . 1 f 9 d 1 1 2 . . . . 
. . . 4 4 1 f 9 d 1 1 2 . . . . 
. . . 2 4 1 d d 1 1 1 2 . . . . 
. . . 2 . 1 1 1 1 1 1 2 . . . . 
. . . 2 . 1 1 1 1 1 1 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (togle == 6) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . e e e e e 2 . . . . 
. . . 2 . e e e e e e 2 . . . . 
. . . 2 . e f 1 e e e 2 . . . . 
. . . 4 4 e f 1 d d d 2 . . . . 
. . . 2 4 e d d e e e 2 . . . . 
. . . 2 . d e e 1 1 1 2 . . . . 
. . . 2 . e 1 1 1 1 1 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        } else if (togle == 7) {
        	
        }
    } else {
        can_build = false
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
game.onUpdate(function () {
    if (new_sprite.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass2) || (new_sprite.tileKindAt(TileDirection.Center, myTiles.tile0) || new_sprite.tileKindAt(TileDirection.Center, sprites.builtin.forestTiles0))) {
        if (!(new_sprite.kind() == SpriteKind.Player)) {
            new_sprite.setKind(SpriteKind.Player)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.castle.tileGrass2)) {
        destroy = true
        destroy_lac = tilemap.locationOfSprite(mySprite)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . b . . . . . 2 . . . . 
. . . 2 . . b b . . . 2 . . . . 
. . . 2 . . b b . . . 2 . . . . 
. . . 2 . b . . b . . 2 . . . . 
. . . 2 b . . . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    } else {
        destroy = false
    }
})
game.onUpdate(function () {
	
})
forever(function () {
	
})
game.onUpdateInterval(1000, function () {
    sekint += 1
    if (sekint > 200) {
        if (tilemap2 == 3) {
            game.over(true, effects.confetti)
        } else {
            leval(mySprite)
        }
    }
})
game.onUpdateInterval(Emmy_speed_2, function () {
    if (tilemap2 == 0) {
        emmny_spon()
    } else if (tilemap2 == 1) {
        emmny_spon2()
    } else if (tilemap2 >= 2) {
        if (Math.percentChance(5)) {
            boss()
        } else {
            emmny_spon2()
        }
    }
})
