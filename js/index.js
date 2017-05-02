var overview = new Vue({
  el: '#overview',
  data: {
    rows: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    ],
  },
  created: function () {
    fetch('/resource.csv').then(response => {
      return response.text();
    }).then(text => {
      // Split text in to array
      rows = text.split("\n");
      this.rows = rows.map(row => {
        return row.split(",");
      });
    });
  }
});