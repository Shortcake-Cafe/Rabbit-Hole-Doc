# Core Concepts

Rabbit Hole is a Scratch game, which means it wasn't necessarily designed to be modded. I have created an interop that allows scripts to interact with Scratch more easily, but there are still some concepts that you should understand.

## What the heck is Scratch?

If you don't know much about Scratch itself (I sure didn't), there are a few fundamental concepts you should understand:

- A `sprite` is essentially a class. It holds the scripts for a certain object in the game. They could have images, audio, or they could be completely invisible. The important thing to note is that it is an object with scripts.

- A `block` is some piece of code. It is literally the block that you drag around in the Scratch editor. They are some instruction that is executed within the game, whether it is setting a variable or moving a sprite.

- A `script` is a collection of blocks. It is a sequence of instructions that are executed in order. This is what you see in the Scratch editor when you drag blocks around.

- A `hat` is a block that starts a script. There will be references within the Scratch code to "hats", so I figured I should probably explain what that is because it tripped me up at first. However, you shouldn't have to work directly with hats if you use the interop.

## Scratch "API" Basics

The `Scratch` object is the main way to interact with the game. Here are some of the objects present:

- `Scratch.vm` - The Scratch virtual machine. This is the main object that the game runs on.

- `Scratch.vm.runtime` - The runtime object. This is where you can find the sprites, stage, and other runtime objects.
- `Scratch.vm.runtime.targets` - An array of all the sprites and their blocks.

## Interop

For the sake of simplicity, I have created an interop that allows you to interact with Scratch directly from JavaScript. This interop is included with the injector. Here are the functions you can use:

- `Scratch.vm.vars` - An object that allows for variable manipulation. It has three main functions:

  - `.get(name)` - Gets the value of an existing Scratch variable. Case-insensitive.

  - `.set(name, value, permanent?)` - Sets the value of an existing Scratch variable. If `permanent` is true, the variable will be locked to that value until changed with this function again. Case-insensitive.

  - `.search(query)` - Finds and returns any number of variables that contain the search query. This method is more for development purposes to easily find variable names. Case-insensitive.

- `Scratch.vm.broadcast(name)` - Broadcasts a message to all sprites. I have made this function equivalent to the `broadcast` block in Scratch. This will trigger any scripts that starts with the `when I receive` hat with the given name.

- `Scratch.vm.listen(name, callback)` - Listens for a broadcast with the given name. When a broadcast with the name is sent, either by the game or an extension, the callback will be run.

## Additional Notes

I might eventually write a full type definition for both the Scratch object and the interop, but I would rather wait for a higher demand before doing so. If this is something you're interested in, please let me know.