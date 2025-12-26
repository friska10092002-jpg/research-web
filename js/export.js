function downloadExcel() {
  const key = document.getElementById("adminKey").value;
  if (key !== "PENELITI123") {
    alert("Akses ditolak");
    return;
  }

  db.collection("responden").get().then(snapshot => {
    let csv = "";
    snapshot.forEach(doc => {
      const d = doc.data();
      csv += Object.values(d).join(",") + "\n";
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "hasil_penelitian.csv";
    a.click();
  });
}
