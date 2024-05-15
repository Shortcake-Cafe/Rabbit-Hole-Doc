(function (Scratch) {
  "use strict";

  // Define methods for getting, setting, and searching variables
  Scratch.vm.vars = {
    get: function (name) {
      const target = Scratch.vm.runtime.getTargetForStage();

      if (!target) {
        setTimeout(() => this.get(name), 1000);
        return;
      }

      const variables = target.variables;

      for (const variable of Object.values(variables)) {
        if (variable.name.toLowerCase() === name.toLowerCase()) {
          return variable.value;
        }
      }

      console.log(`Variable ${name} not found`);
    },

    set: function (name, value, permanent = false) {
      const target = Scratch.vm.runtime.getTargetForStage();

      if (!target) {
        setTimeout(() => this.set(name, value, permanent), 1000);
        return;
      }

      const variables = target.variables;

      for (const variable of Object.values(variables)) {
        if (variable.name.toLowerCase() === name.toLowerCase()) {
          variable.value = value;

          if (permanent) {
            if (variable.interval) clearInterval(variable.interval);
            variable.interval = setInterval(() => (variable.value = value), 50);
          } else {
            if (variable.interval) clearInterval(variable.interval);
          }

          return true;
        }
      }

      return false;
    },

    search: function (name) {
      const target = Scratch.vm.runtime.getTargetForStage();

      if (!target) {
        setTimeout(() => this.search(name), 1000);
        return;
      }

      const variables = target.variables;

      return Object.values(variables)
        .filter(variable => variable.name.toLowerCase().includes(name.toLowerCase()))
        .map(variable => variable.name);
    },
  };

  // Define methods for broadcasting and listening to events
  Scratch.vm.broadcast = name => Scratch.vm.runtime.startHats("event_whenbroadcastreceived", { BROADCAST_OPTION: name });

  Scratch.vm.listen = (name, callback) => {
    if (!name || !callback) return false;
    Scratch.vm.runtime.on(name, callback);
    return true;
  };

  // Log all events if logAllEvents is true
  Scratch.vm.logAllEvents = false;
  const originalStartHats = Scratch.vm.runtime.startHats;
  Scratch.vm.runtime.startHats = function (e, t, n) {
    if (e === "event_whenbroadcastreceived") {
      if (Scratch.vm.logAllEvents) console.log(`Received broadcast: ${t.BROADCAST_OPTION}`);

      // Emit events for all broadcasts
      Scratch.vm.runtime.emit(t.BROADCAST_OPTION);
    }

    return originalStartHats.apply(Scratch.vm.runtime, [e, t, n]);
  };

  // Define the Interop class
  class Interop {
    getInfo() {
      return {
        id: "Interop",
        name: "Interop",
        blocks: [],
        menus: {},
      };
    }
  }

  // Register the Interop extension
  Scratch.extensions.register(new Interop());
})(Scratch);