
const loginAnchor = document.getElementById('login-btn');

loginAnchor.onclick = (e)=>{
    const user = getCurrentUser();
    console.log(user);
    if(user){
        window.location.href= "dashboard.html";
    } else {
        window.location.href= "login.html";
    }
};