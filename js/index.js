var overview = new Vue({
  el: '#overview',
  data: {
    logistics: [],
  },
  created: function () {
    fetch('/resource.csv').then(response => {
      return response.text();
    }).then(text => {
      // Split text in to array
      battles = text.split("\n");

      // Cut off first two rows from csv
      battles = battles.slice(2);

      this.logistics = battles.map(battle => {
        return battle.split(",");
      });
    });
  }
});

// name, code, level, member, time, human_resource, ammo, ration, component, human_resource_hour, ammo_hour, ration_hour, component_hour