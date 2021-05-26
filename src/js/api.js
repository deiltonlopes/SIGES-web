const firebaseScript = document.createElement('script');
firebaseScript.src = "www.gstatic.com/firebasejs/8.6.2/firebase-app.js";

document.body.appendChild(firebaseScript);

const firebaseConfig = {
    apiKey: "AIzaSyDSAE86t4gAysLfgPQfdZqJbakM5XYIc5s",
    authDomain: "siges-db.firebaseapp.com",
    databaseURL: "https://siges-db-default-rtdb.firebaseio.com",
    projectId: "siges-db",
    storageBucket: "siges-db.appspot.com",
    messagingSenderId: "831652871937",
    appId: "1:831652871937:web:06f6a936fa3c2c97b22500"
};
firebase.initializeApp(firebaseConfig);