$(function () {
    // Statisik Chart
    var statistikChartCanvas = $('#statistikChart').get(0).getContext('2d')
    var statistikData = {
        labels: ['Programming', 'Web Development', 'Android Development', 'Cloud', 'Data', 'UI/UX Design', 'Soft Skill'],
        datasets: [
            {
                label: 'Persentase',
                /*
                    [11, 8, 5, 3, 12, 3, 4] -- Pelatihan [Jumlah 46]
                    [9, 31, 7, 0, 11, 4, 0] -- Proyek [Jumlah 64]
                    ----------------------- +
                    [20, 41, 12, 3, 23, 7, 4] -- Total [110]
                    [20/110, 41/110, 12/110, 3/110, 23/110, 6/110, 4/110] -- Rata-Rata
                    [18.2, 37.3, 10.9, 2.7, 20.9, 6.4, 3.6] -- Persentase                    
                */
                data: [18.2, 37.3, 10.9, 2.7, 20.9, 6.4, 3.6],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
        ]
    }

    var statistikOptions = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 3
            }
        },
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                title: (items, data) => {
                    if (!items.length) {
                        return '';
                    }
                    return `${data.labels[items[0].index]}`
                }
            }
        }
    }

    new Chart(statistikChartCanvas, {
        type: 'radar',
        data: statistikData,
        options: statistikOptions
    })

    // Pelatihan Chart
    var pelatihanChartCanvas = $('#pelatihanChart').get(0).getContext('2d')
    var pelatihanData = {
        labels: [
            'Programming',
            'Web Development',
            'Android Development',
            'Cloud',
            'Data',
            'UI/UX Design',
            'Soft Skill',
        ],
        datasets: [
            {
                data: [11, 8, 5, 3, 12, 3, 4],
                backgroundColor: ['#adb5bd', '#001f3f', '#28a745', '#007bff', '#f012be', '#605ca8', '#3d9970'],
            }
        ]
    }

    var pelatihanOptions = {
        maintainAspectRatio: false,
        responsive: true,
    }

    new Chart(pelatihanChartCanvas, {
        type: 'doughnut',
        data: pelatihanData,
        options: pelatihanOptions
    })

    // Sertifikasi Chart
    var sertifikasiChartCanvas = $('#sertifikasiChart').get(0).getContext('2d')
    var sertifikasiData = {
        labels: [
            'Pass',
            'Fail',
        ],
        datasets: [
            {
                data: [4, 1],
                backgroundColor: ['#007bff', '#343a40'],
            }
        ]
    }

    var sertifikasiOptions = {
        maintainAspectRatio: false,
        responsive: true,
    }

    new Chart(sertifikasiChartCanvas, {
        type: 'pie',
        data: sertifikasiData,
        options: sertifikasiOptions
    })

    // Proyek Chart
    var proyekChartCanvas = $('#proyekChart').get(0).getContext('2d')
    var proyekChartData = $.extend(true, {}, {
        labels: ['2022', '2021', '2020', '2019', '2018'],
        datasets: [
            {
                label: 'Programming',
                backgroundColor: '#adb5bd',
                data: [1, 1, 1, 4, 2] // 9
            },
            {
                label: 'Web Development',
                backgroundColor: '#001f3f',
                data: [17, 3, 1, 8, 4] // 33
            },
            {
                label: 'Android Development',
                backgroundColor: '#28a745',
                data: [0, 6, 1, 0, 0] // 7
            },
            {
                label: 'Cloud',
                backgroundColor: '#007bff',
                data: [0, 0, 0, 0, 0] // 0
            },
            {
                label: 'Data',
                backgroundColor: '#f012be',
                data: [0, 2, 4, 4, 1] // 11
            },
            {
                label: 'UI/UX Design',
                backgroundColor: '#605ca8',
                data: [0, 0, 1, 3, 0] // 4
            },
            {
                label: 'Soft Skill',
                backgroundColor: '#3d9970',
                data: [0, 0, 0, 0, 0] // 0
            },
        ]
    })

    var proyekChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }

    new Chart(proyekChartCanvas, {
        type: 'bar',
        data: proyekChartData,
        options: proyekChartOptions
    })

    // Perlombaan Chart
    var perlombaanChartCanvas = $('#perlombaanChart').get(0).getContext('2d')
    var perlombaanData = {
        labels: [
            'Juara 1',
            'Juara 2',
            'Juara 3',
            'Partisipasi'
        ],
        datasets: [
            {
                data: [3, 3, 3, 11],
                backgroundColor: ['#28a745', '#17a2b8', '#dc3545', '#6c757d'],
            }
        ]
    }

    var perlombaanOptions = {
        maintainAspectRatio: false,
        responsive: true,
    }

    new Chart(perlombaanChartCanvas, {
        type: 'pie',
        data: perlombaanData,
        options: perlombaanOptions
    })
})