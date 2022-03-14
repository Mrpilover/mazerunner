controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    500,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    500,
    false
    )
    FIREBALL = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    500,
    false
    )
    FIREBALL = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 1 1 . . . . . . . 
        . . . . . 3 3 . 3 1 . . . . . . 
        . . 3 2 2 3 . . . 1 . . . . . . 
        . 3 3 1 2 2 . . . 3 1 . . . . . 
        . 3 1 1 1 3 2 2 . 3 1 . . . . . 
        . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
        . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
        . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
        . 3 1 1 1 3 2 2 . 3 1 . . . . . 
        . 3 3 1 2 2 . . . 3 1 . . . . . 
        . . 3 2 2 3 . . . 1 . . . . . . 
        . . . . . 3 3 . 3 1 . . . . . . 
        . . . . . . 3 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(34, 28))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    game.over(false)
    effects.blizzard.endScreenEffect()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`jump`,
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
    effects.blizzard.endScreenEffect()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest0, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestOpen)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    FIREBALL.destroy()
    EVIL_DUCK.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    music.playMelody("C5 B A G F E D E ", 63)
    game.over(true)
    effects.smiles.endScreenEffect()
})
let EVIL_DUCK: Sprite = null
let FIREBALL: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . f . . . . . . b 5 b . . . . 
    . . f 1 . . b b b b b b . . . . 
    . . f 1 . f b 5 5 5 5 f f . . . 
    . . f 1 b f f f f f f d 4 c . . 
    . . f 1 b 5 5 f f f d d 4 4 4 b 
    . . f f b 5 5 f f f 4 4 4 4 b . 
    . . f b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 f 5 b . . 
    b d d d b b b 5 5 f 5 f 5 5 b . 
    c d d b 5 5 d c 5 f f f 5 5 b . 
    c b b d 5 d c d 5 5 5 f 5 5 b . 
    c b 5 5 b c d d 5 5 5 f 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 50)
mySprite.ay = 20
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
game.showLongText("MMUuuuahahahhaahahahahahaaha", DialogLayout.Bottom)
game.showLongText("TRRRRRRRRRRRRy aaand escape  ssssssssss", DialogLayout.Bottom)
game.showLongText("THIS IS WHAT YOU DESERVE MUHAHAHAHAHAHA", DialogLayout.Bottom)
for (let index = 0; index < 1e+38; index++) {
    music.playMelody("A F B F G G B - ", 120)
}
for (let index = 0; index < 0; index++) {
    music.playMelody("A B A F A D G C5 ", 120)
    music.playMelody("E B C5 A B G A F ", 300)
}
game.onUpdateInterval(1000, function () {
    EVIL_DUCK = sprites.create(img`
        . . . . . . . . . . b 2 b . . . 
        . . . . . . . . . b 2 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 f 5 5 5 b . . . 
        . . . . b b 5 d 2 f 5 5 d 2 . . 
        . . . . b 5 5 f 2 2 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 1 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 1 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    EVIL_DUCK.setPosition(22, 3)
    EVIL_DUCK.setVelocity(50, 0)
    EVIL_DUCK.follow(mySprite)
})
