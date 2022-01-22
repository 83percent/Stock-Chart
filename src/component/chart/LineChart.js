import { useEffect, useMemo, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
function LineChart({stockInfo, color}) {
    // Ref
    const canvas = useRef(null);
    const chart = useRef(null);

    console.log(stockInfo);

    const __PriceData = useMemo(() => {
        if(stockInfo === undefined) return null;
        return stockInfo.reduce((acc, element) => {
            acc.date.push(element[0]);
            acc.price.push(element[4]);
            return acc;
        }, {date: [], price: []});
    }, [stockInfo])

    const height = (window.innerHeight / 5) * 3;

    useEffect(() => {
        if(canvas.current === null) return;
        if(chart.current === null) {
            Chart.register(...registerables);
            chart.current = new Chart(canvas.current.getContext('2d'), {
                type: 'line',
                data: {
                    labels: Array.from({length: 44}, () => "0"),
                    datasets: [{
                        label: 'Price',
                        borderColor: '#ffffff90',
                        data: Array.from({length: 44}, () => 0),
                        lineTension: 0.15
                    }],
                    
                },
                options : {
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                    responsive: true,
                    borderWidth : 7,
                    pointBackgroundColor: "#ffffff00",
                    pointBorderColor: "#ffffff00",
                    borderJoinStyle: 'round',
                    scales: {
                        x : {display: false},
                        y: {display: false}
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                }
            });
        } else {
            const {date, price} = __PriceData;
            if(date && price) {
                chart.current.data.labels = date;
                chart.current.data.datasets[0].data = price;
                chart.current.data.datasets[0].borderColor = color;
                chart.current.update();
            }
        }
    }, [canvas, __PriceData]);
    return (
            <canvas ref={canvas} height={height}></canvas>

    )
}

export default LineChart;