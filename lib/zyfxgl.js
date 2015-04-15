Morris.Bar({
  element: 'zyfxgl',stacked:true,barColors:["#3a90e8","#52ea29"],gridTextSize:"15",gridTextColor:"#f98514",
  grid:true,axes:true,hideHover:false,
  data: [
    { y: 'a', a: 100, b: 90 },
    { y: 'b', a: 75,  b: 65 },
    { y: 'c', a: 50,  b: 40 },
    { y: 'd', a: 75,  b: 65 },
    { y: 'e', a: 50,  b: 40 },
    { y: '2018', a: 75,  b: 65 },
    { y: '2019', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});