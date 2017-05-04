var overview = new Vue({
  el: '#overview',
  data: {
    rows: [],
  },
  created: function () {
    fetch('/resource.csv').then(response => {
      return response.text();
    }).then(text => {
      // Split text in to array
      rows = text.split("\n");

      // Cut off first two rows from csv
      rows = rows.slice(2);

      this.rows = rows.map(row => {
        return row.split(",");
      });
    });
  }
});