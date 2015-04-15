Morris.Donut({
  element: 'wzbwlqsfx',colors:["#3a90e8","#52ea29","#16e8f0"],resize:true,
  data: [
    {label: "The first", value: 12},
    {label: "Second", value: 30},
    {label: "Third", value: 20}
  ],
 //formatter: function (data) { return data*100 + "%" }
  formatter: function (y) { return y + "%" }
});