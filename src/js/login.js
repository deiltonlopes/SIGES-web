function signup(){
    document.getElementById('signup').classList.add('active');
    document.getElementById('signin').classList.remove('active');
    Array.from(document.getElementsByClassName('register')).forEach((el)=>{
        el.style.display = "block";
    });
    Array.from(document.getElementsByClassName('login')).forEach((el)=>{
        el.style.display = "none";
    });
};

function signin(){
    document.getElementById('signup').classList.remove('active');
    document.getElementById('signin').classList.add('active');
    Array.from(document.getElementsByClassName('register')).forEach((el)=>{
        el.style.display = "none";
    });
    Array.from(document.getElementsByClassName('login')).forEach((el)=>{
        el.style.display = "block";
    });
};

function register(){
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    createUser(email, password).then( user =>{
        return updateUser('profile', {displayName: name});
    }).then(()=>{
        window.location.href = "dashboard.html";
    }).catch(err =>{
        console.log(err);
    });
}

function signIn(){
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    login(email, password).then( user =>{
        window.location.href = "dashboard.html";
    }).catch(err =>{
        console.log(err);
    });
}

document.getElementById('return').onclick = ()=>{
    window.location.href="index.html";
}