Morris.Bar({
  element: 'zyfxgl',stacked:true,barColors:["#3a90e8","#52ea29"],gridTextSize:"15",gridTextColor:"#888",
  grid:true,axes:true,hideHover:false,
  data: [
    { y: '2013', a: 100, b: 90 },
    { y: '2014', a: 75,  b: 65 },
    { y: '2015', a: 50,  b: 40 },
    { y: '2016', a: 75,  b: 65 },
    { y: '2017', a: 50,  b: 40 },
    { y: '2018', a: 75,  b: 65 },
    { y: '2019', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B']
});