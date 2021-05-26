
function createUser(){
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user=>{
        console.log(user);
    }).catch(err=>{
        console.log(err);
    });
};