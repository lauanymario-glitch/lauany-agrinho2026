const ctx = document.getElementById('graficoReciclagem');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Papel',
            'Plástico',
            'Vidro',
            'Metal'
        ],

        datasets: [{
            label: 'Quantidade Coletada (kg)',
            data: [
                250,
                320,
                150,
                130
            ]
        }]
    },

    options: {
        responsive: true
    }
});
