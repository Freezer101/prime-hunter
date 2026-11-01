// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030303030303030303030303030303030303010103030303030303010103030303030101030303030303030101030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030101030303030303030101030303030301010303030303030301010303030303030303030303030303030303030303030303030303030303030303030303`, img`
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
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,myTiles.tile1,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000130003060606080606080606080606060601060909090909090909090909090909060609040404040404040404040404090608090404040404040404040404040908060904040404040404040404040409060609040404040404040404040404090606090404040404040404040404040906080904040404040407040404040409080609040404040404040404040404090606090404040404040404040404040906060904040404040404040404040409060809040404040404040404040404090806090404040404040404040404040906060904040404040404040404040409060609090909090909090909090909090602060608060606060806060608060605000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2222222222222222
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2..............2
2222222222222222
................
................
................
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterNorth2,sprites.dungeon.floorDark2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
