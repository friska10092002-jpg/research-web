db.collection("responden").onSnapshot(snapshot => {
  const usia = [];
  const status = {};

  snapshot.forEach(doc => {
    const d = doc.data();
    usia.push(Number(d.usia));
    status[d.status] = (status[d.status] || 0) + 1;
  });

  new Chart(document.getElementById("chartUsia"), {
    type: "bar",
    data: {
      labels: usia.map((_, i) => "R" + (i + 1)),
      datasets: [{ data: usia }]
    }
  });

  new Chart(document.getElementById("chartStatus"), {
    type: "pie",
    data: {
      labels: Object.keys(status),
      datasets: [{ data: Object.values(status) }]
    }
  });
});
