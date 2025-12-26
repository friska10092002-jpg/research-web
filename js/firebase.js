// ===============================
// FIREBASE CONFIG
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyAHyJRd1LzEFh_5sUJBd_ciegzpv7YQ9I4",
  authDomain: "website-penelitian.firebaseapp.com",
  projectId: "website-penelitian",
  storageBucket: "website-penelitian.firebasestorage.app",
  messagingSenderId: "764269925218",
  appId: "1:764269925218:web:619f9d1ae77f93fc02d23b"
};

// ===============================
// INISIALISASI FIREBASE
// ===============================
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ===============================
// SUBMIT FORM (AMAN)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("questionnaireForm");

  if (!form) {
    console.error("Form questionnaireForm tidak ditemukan");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {};
    new FormData(form).forEach((value, key) => {
      data[key] = value;
    });

    data.timestamp = new Date();

    db.collection("responden").add(data)
      .then(() => {
        alert("Terima kasih. Jawaban Anda berhasil disimpan.");
        form.reset();
      })
      .catch(err => {
        console.error(err);
        alert("Terjadi kesalahan saat menyimpan data.");
      });
  });
});
