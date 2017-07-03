var overview = new Vue({
    el: '#overview',
    data: {
        filter: {
            human_resource: true,
            ammo: true,
            ration: true,
            component: true,
        },
        level: 1,
        teams: 1,
        logistics: [],
    },
    computed: {
        efficient_logistics: function () {
            // Vue.js official sample
            // `this` points to the vm instance
            // return this.message.split('').reverse().join('')
            return this.logistics.filter((battle) => {
                if ('level' in battle && this.level >= battle.level) {
                    return true;
                }
                return false;
            }).sort((a, b) => {
                // Sort by sum of four profit/hour
                let sum_a = 0;
                let sum_b = 0;
                if (this.filter.ammo) {
                    sum_a += a.ammo_hour;
                    sum_b += b.ammo_hour;
                }
                if (this.filter.component) {
                    sum_a += a.component_hour;
                    sum_b += b.component_hour;
                }
                if (this.filter.human_resource) {
                    sum_a += a.human_resource_hour;
                    sum_b += b.human_resource_hour;
                }
                if (this.filter.ration) {
                    sum_a += a.ration_hour;
                    sum_b += b.ration_hour;
                }

                return sum_b - sum_a;
            }).slice(0, this.teams); // Show only top `temas`'s efficient battles
        }
    },
    created: function () {
        fetch('resource.csv').then(response => {
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
                    // Change all data type to Int except name & code
                    if (name[i] != 'name' && name[i] != 'code') {
                        object[name[i]] = parseInt(attr);
                    } else {
                        object[name[i]] = attr;
                    }
                });

                return object;
            });
        });
    }
});
