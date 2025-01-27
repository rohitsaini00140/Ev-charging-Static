


export const fakeBarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: 'Increment',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        backgroundColor: [
            'rgb(32, 201, 151)',
            'rgb(255, 99, 132)',
            'rgb(32, 201, 151)',
            'rgb(32, 201, 151)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(255, 99, 132)',
            'rgb(32, 201, 151)',
            'rgb(255, 99, 132)',
            'rgb(32, 201, 151)',
            'rgb(32, 201, 151)',
            'rgb(255, 99, 132)'
        ]
    }]
};



export const optionsForBarChart = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: 'black',
            },
        },
        title: {
            display: true,
            text: 'Monthly Revenue Growth',
            color: "black"
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'black'
            },
            grid: {
                color: '#ffff',
            }
        },
        y: {
            ticks: {
                color: 'black'
            },
            grid: {
                color: '#ffff',
            }
        },
    },
};