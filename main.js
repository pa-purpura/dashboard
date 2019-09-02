$(document).ready(function(){


// prima chart

    var ctx = $('#barChart');

    var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['FB', 'Twitter', 'Instagram',],
        datasets: [{
            label: ['M - Unique visitors'],
            data: [88, 102, 44,],
            backgroundColor: [
                'rgba(51, 225, 237, 0.6)',
                'rgba(120, 219, 243, 0.6)',
                'rgba(195, 247, 235, 0.6)',
            ],
            borderColor: [
                'rgba(50, 56, 70, 0.6)',
                'rgba(50, 56, 70, 0.6)',
                'rgba(50, 56, 70, 0.6)',
            ],
            borderWidth: 3
          },
          {
            label: ['F - Unique visitors'],
            data: [18, 56, 90,],
            backgroundColor: [
                'rgba(275, 125, 237, 0.6)',
                'rgba(285, 219, 243, 0.6)',
                'rgba(295, 247, 235, 0.6)',
            ],
            borderColor: [
                'rgba(50, 56, 70, 0.6)',
                'rgba(50, 56, 70, 0.6)',
                'rgba(50, 56, 70, 0.6)',
            ],
            borderWidth: 3
          }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// seconda chart

    var secctx = $('#lineChart');

    var linechart = new Chart(secctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'],
        datasets: [{
            label: 'FB',
            // backgroundColor: 'rgb(51, 225, 237)',
            borderColor: 'rgb(51, 225, 237)',
            data: [0, 10, 5, 2, 20, 30, 40]
        },
        {
            label: 'Twitter',
            // backgroundColor: 'rgb(10, 219, 243,)',
            borderColor: 'rgb(120, 219, 243)',
            data: [5, 10, 5, 5, 10, 10, 25]
        },
        {
            label: 'Instagram',
            // backgroundColor: 'rgb(10, 219, 243,)',
            borderColor: 'rgb(195, 247, 235)',
            data: [10, 20, 5, 40, 30, 20, 25]
        }]
    },
    // Configuration options go here
    options: {}
});

// terza chart

    var terctx = $('#pieChart');

    var pieChart = new Chart(terctx, {
            type: 'pie',

            data: {
                  labels: ['+18','-18'],
                  datasets: [{
                          label:'torta',
                          backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)',],
                          data: [3,7],
                  }],
            }
        });

// quarta chart

    var quaterctx = $('#doughnutChart');

    var dougChart = new Chart(quaterctx, {
        type: 'doughnut',
        data: {
              labels: ['F','M'],
              datasets: [{
                      label:'dough',
                      backgroundColor: ['rgba(255, 99, 132, 0.3)', 'rgba(120, 219, 243, 0.3)',],
                      data: [3,4],
              }],
        }
    });

// quinta chart

    var pentactx = $('#FirstRadarChart');

    var firstradarChart = new Chart(pentactx, {
        type: 'radar',
        data: {
              labels: ['Asia','USA','EU','Eur','SAmerica','China'],
              datasets: [{
                      borderWidth:1,
                      label:['F',],
                      backgroundColor: ['rgba(255, 99, 132, 0.3)',],
                      data: [5,10,5,10,5,8],
                    },
                    {
                      borderWidth:1,
                      label:['M',],
                      backgroundColor: [ 'rgba(120, 219, 243, 0.3)',],
                      data: [10,5,10,5,10,2],
                    }
            ],
        }
    });

// sesta chart

    var esactx = $('#SecondRadarChart');

    var secondradarChart = new Chart(esactx, {
    type: 'radar',
    data: {
          labels: ['Asia','USA','EU','Eur','SAmerica','China'],
          datasets: [{
                  borderWidth:1,
                  label:['+18',],
                  backgroundColor: ['rgba(75, 192, 192, 0.3)',],
                  data: [35,90,25,80,30,90],
                },
                {
                  borderWidth:1,
                  label:['-18',],
                  backgroundColor: ['rgba(255, 206, 86, 0.3)',],
                  data: [95,17,89,40,100,80],
                }
        ],
    }
});



// chiusura document
});
