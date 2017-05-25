var overview = new Vue({
  el: '#overview',
  data: {
    level: 1,
    logistics: [],
  },
  computed: {
    efficient_logistics: function () {
      // Vue.js official sample
      // `this` points to the vm instance
      // return this.message.split('').reverse().join('')
      return this.logistics.filter((battle) => {
        if('level' in battle && this.level >= battle.level) {
          return true;
        }
        return false;
      });
    }
  },
  created: function () {
    fetch('/resource.csv').then(response => {
      return response.text();
    }).then(text => {
      battles = text.split("\n");

      // Cut off first two rows from csv
      battles = battles.slice(2);

      // Conver array to JSON
      var name = ["name", "code", "level", "member", "time",
        "human_resource", "ammo", "ration", "component",
        "human_resource_hour", "ammo_hour", "ration_hour", "component_hour"];
      this.logistics = battles.map(battle => {
        var object = {};
        battle.split(",").map((attr, i) => {
          object[name[i]] = attr;
        });

        return object;
      });
    });
  }
});
