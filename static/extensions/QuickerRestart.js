(function (Scratch) {
  "use strict";

  document.canQuickRestart = true;
  document.addEventListener("keypress", (event) => {
    if (event.key === "`" && Scratch.vm.vars.get("IsPlaying?") === "1") {
      if (document.canQuickRestart) {
        document.canQuickRestart = false;
        Scratch.vm.broadcast("transition");
        // timeout 0.8 seconds
        setTimeout(() => {
          Scratch.vm.broadcast("destroyBossBar");
          Scratch.vm.broadcast("DeleteEverythingForNewRun");
          Scratch.vm.broadcast("ExitPauseScreen");
          Scratch.vm.broadcast("GLOBAL_BeginRun");
          setTimeout(() => {
            document.canQuickRestart = true;
          }, 3000);
        }, 800);
      }
    }
  });

  class QuickerRestart {
    getInfo() {
      return {
        id: "QuickerRestart",
        name: "QuickerRestart",
        blocks: [],
        menus: {},
      };
    }
  }

  Scratch.extensions.register(new QuickerRestart());
})(Scratch);
