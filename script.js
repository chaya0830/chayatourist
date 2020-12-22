Highcharts.chart('container', {

  title: {
    text: '三國近六年inbound人數統計，2014-2019'
  },

  subtitle: {
    text: 'Source: https://www.unwto.org/country-profile-inbound-tourism'
  },

  yAxis: {
    title: {
      text: 'INBOUND人數(百萬)'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2014 to 2019'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2014
    }
  },

  series: [{
    name: '巴西',
    data: [6.4, 6.3, 6.5, 6.6, 6.6, 6.4]
  }, {
    name: '中國',
    data: [55.6, 56.9, 59.3,60.7, 60.7,62.9, 62.7]
  }, {
    name: '印尼',
    data: [9.4, 10.0, 11.1, 12.9, 13.4, 15.5]
  
  }],
  

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});