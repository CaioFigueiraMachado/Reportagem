// Caio Figueira Machado

const ctx = document.getElementById('grafico').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Violência doméstica',
      'Assédio no trabalho',
      'Desigualdade salarial',
      'Feminicídio'
    ],
    datasets: [{
      label: 'Casos por 100 mil mulheres (Brasil 2023)',
      data: [368, 215, 180, 1.4],
      backgroundColor: [
        '#6a0dad', // roxo escuro
        '#b84ee0', // roxo claro
        '#ec407a', // rosa
        '#d81b60'  // vermelho escuro
      ],
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'Indicadores de misoginia no Brasil'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Casos por 100 mil mulheres'
        }
      }
    }
  }
});
