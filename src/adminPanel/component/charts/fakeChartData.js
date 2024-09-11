export const fakeLineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Current Period",
            data: [80000, 60000, 40000, 20000, 10000, 30000, 50000, 70000, 60000, 50000, 40000, 30000],
            borderColor: "rgb(32, 201, 151)",
            fill: false,
        },
        {
            label: "Previous Period",
            data: [70000, 50000, 30000, 25000, 20000, 35000, 45000, 65000, 55000, 45000, 35000, 20000],
            borderColor: "rgb(255, 99, 132)",
            fill: false,
        }
    ]
};


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
        ],
        // borderColor: [
        //     'rgb(32, 201, 151)',
        //     'rgb(255, 99, 132)',
        //     'rgb(32, 201, 151)',
        //     'rgb(32, 201, 151)',
        //     'rgb(255, 99, 132)',
        //     'rgb(255, 99, 132)',
        //     'rgb(255, 99, 132)',
        //     'rgb(32, 201, 151)',
        //     'rgb(255, 99, 132)',
        //     'rgb(32, 201, 151)',
        //     'rgb(32, 201, 151)',
        //     'rgb(255, 99, 132)'
        // ],
        // borderWidth: 1
    }]
};
