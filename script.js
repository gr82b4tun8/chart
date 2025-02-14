const chart = LightweightCharts.createChart(document.getElementById('chart'), {
    width: 760,
    height: 400,
    layout: {
        backgroundColor: '#ffffff',
        textColor: '#000',
    },
    grid: {
        vertLines: {
            color: 'rgba(0, 0, 0, 0.05)',
        },
        horzLines: {
            color: 'rgba(0, 0, 0, 0.05)',
        },
    },
    priceScale: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    timeScale: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        timeVisible: true,
    },
});
document.addEventListener('DOMContentLoaded', () => {
    // Your chart initialization and data fetching code here
});
