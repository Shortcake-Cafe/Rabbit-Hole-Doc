# Skinning

The Rabbit Hole injector is capable of loading modified assets into the game without making permanent changes to the game files. This allows for the creation of custom skins or retextures for the game.

## Creating a skin

To create a skin, you will need to download the <a href="../../RabbitHoleAssets.zip" download="RabbitHoleAssets.zip">asset pack</a> and extract it. The asset pack contains the game's assets with their original file names and structure. You can modify these assets in any way you like, as long as you keep the file names and structure the same.

## Applying a skin

Once you have some assets changed, you can add all of the new assets to a zip archive. Once you have a zip archive with a handful of modified assets, you can place that archive into the regular `extensions` folder that the injector uses. The injector will be able to detect the skin and load it into the game.

## Restoring original assets

Like any extension, skins can be disabled by running the injector and restoring original files. This will remove the skin from the game and restore the original assets.
