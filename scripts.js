// scripts.js
const repsCtx = document.getElementById("repsChart").getContext("2d");
const weightCtx = document.getElementById("weightChart").getContext("2d");

const repsData = {
  labels: [], // Numéros de séances
  datasets: [
    {
      label: "Nombre de répétitions",
      data: [],
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
  ],
};

const weightData = {
  labels: [], // Numéros de séances
  datasets: [
    {
      label: "Poids (kg)",
      data: [],
      backgroundColor: "rgba(153, 102, 255, 1)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
      fill: false,
      tension: 0.1,
    },
  ],
};

const repsChart = new Chart(repsCtx, {
  type: "line",
  data: repsData,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Séance",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Nombre de répétitions",
        },
      },
    },
  },
});

const weightChart = new Chart(weightCtx, {
  type: "line",
  data: weightData,
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Séance",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Poids (kg)",
        },
      },
    },
  },
});

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const session = document.getElementById("session").value;
    const reps = document.getElementById("reps").value;
    const weight = document.getElementById("weight").value;

    // Ajouter les données aux deux graphiques
    if (!repsData.labels.includes(session)) {
      repsData.labels.push(session);
      weightData.labels.push(session);
    }

    const sessionIndex = repsData.labels.indexOf(session);
    repsData.datasets[0].data[sessionIndex] = parseInt(reps);
    weightData.datasets[0].data[sessionIndex] = parseFloat(weight);

    repsChart.update();
    weightChart.update();
  });
