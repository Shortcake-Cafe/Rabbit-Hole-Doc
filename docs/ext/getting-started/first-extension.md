# First Extension

To create an extension, you will need to create a new JavaScript file in your `extensions` directory. This file will hold your script.

## Base Extension

Here is a basic template for an extension:

```javascript
(function (Scratch) {
  "use strict";

  // Your code goes here

  class ExampleExtension {
    getInfo() {
      return {
        id: "ExampleExtension",
        name: "ExampleExtension",
        blocks: [],
        menus: {},
      };
    }
  }

  Scratch.extensions.register(new ExampleExtension());
})(Scratch);
```

You will note that this template takes in a `Scratch` object that will let you interact with the game. The `ExampleExtension` class is where you will define your extension's metadata. As of now, `blocks` and `menus` are unused, but still required by Scratch to register the extension.

## Example Extension

Here is an example extension that will automatically quick restart your game when you take any sort of damage:

```javascript
(function (Scratch) {
  "use strict";

  // Create a listener for the 'playerTakesDamage' event
  Scratch.vm.listen("playerTakesDamage", () => {
    Scratch.vm.broadcast("transition"); // Starts the transition effect
    setTimeout(() => {
      // After 0.8 seconds (giving time for the transition), restart the game
      Scratch.vm.broadcast("DeleteEverythingForNewRun");
      Scratch.vm.broadcast("ExitPauseScreen");
      Scratch.vm.broadcast("GLOBAL_BeginRun");
    }, 800);
  });

  // Define the extension metadata
  class RestartOnDamage {
    getInfo() {
      return {
        id: "RestartOnDamage",
        name: "RestartOnDamage",
        blocks: [],
        menus: {},
      };
    }
  }

  // Register the extension
  Scratch.extensions.register(new RestartOnDamage());
})(Scratch);
```

### Example Breakdown

Here is a visual breakdown of the example extension when compared to the actual Scratch code used in the game for quick restarting, with the hat added for clarity:

<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src="../../img/blocks/ext/whenPlayerdamage.png" alt="Image" style={{ marginRight: '20px', height: '62px' }} />
  <code>Scratch.vm.listen("playerTakesDamage")</code>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src="../../img/blocks/ext/bcTransition.png" alt="Image" style={{ marginRight: '20px', height: '50px' }} />
  <code>Scratch.vm.broadcast("transition");</code>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src="../../img/blocks/ext/wait.png" alt="Image" style={{ marginRight: '20px', height: '50px' }} />
  <code>The timeout handles this.</code>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src="../../img/blocks/ext/bcDelete.png" alt="Image" style={{ marginRight: '20px', height: '50px' }} />
  <code>Scratch.vm.broadcast("DeleteEverythingForNewRun");</code>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src="../../img/blocks/ext/bcExitPause.png" alt="Image" style={{ marginRight: '20px', height: '50px' }} />
  <code>Scratch.vm.broadcast("ExitPauseScreen");</code>
</div>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src="../../img/blocks/ext/bcBegin.png" alt="Image" style={{ marginRight: '20px', height: '50px' }} />
  <code>Scratch.vm.broadcast("GLOBAL_BeginRun");</code>
</div>
