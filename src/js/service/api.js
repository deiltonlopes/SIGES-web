'use-strict';

["https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js",
"https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js"].map((url, idx)=>{
  let script = document.createElement('script');
  script.src = url;
  if(idx === 0) script.id = "firebase-script";
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

document.getElementById("firebase-script").onload = ()=>{
    firebase.initializeApp(firebaseConfig);
    const authScript = document.createElement('script');
    authScript.src = "../js/service/auth.js";

    document.body.appendChild(authScript);
};