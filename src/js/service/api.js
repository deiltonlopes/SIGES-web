
["https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js",
"https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js",
"https://www.gstatic.com/firebasejs/8.6.2/firebase-firestore.js"].map((url, idx)=>{
  let script = document.createElement('script');
  script.src = url;
  script.id = idx === 0 ? 'firebase-app' : '';
  document.body.appendChild(script);
});

const firebaseConfig = {
    apiKey: "AIzaSyDSAE86t4gAysLfgPQfdZqJbakM5XYIc5s",
    authDomain: "siges-db.firebaseapp.com",
    databaseURL: "https://siges-db-default-rtdb.firebaseio.com",
    projectId: "siges-db",
    storageBucket: "siges-db.appspot.com",
    messagingSenderId: "831652871937",
    appId: "1:831652871937:web:06f6a936fa3c2c97b22500"
  };

document.getElementById('firebase-app').onload = ()=>{
    firebase.initializeApp(firebaseConfig);
    const authScript = document.createElement('script');
    const databaseScript = document.createElement('script');

    authScript.src = "../js/service/auth.js";
    databaseScript.src = "../js/service/database.js";

    document.body.appendChild(authScript);
    document.body.appendChild(databaseScript);
};