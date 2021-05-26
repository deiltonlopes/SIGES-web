var currentUser = firebase.auth().currentUser;

async function initialConfig(){
    firebase.auth.languageCode = 'pt';
    firebase.auth().onAuthStateChanged((user)=>{
        currentUser = user;
    });
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

initialConfig();

function createUser(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};


function login(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

function facebookLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

function gmailLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

function logout(){
    return firebase.auth().signOut();
};

function updateUser(field, newInfo){
    const user = currentUser;
    if(user){
        switch(field){
            case 'profile':
                return user.updateProfile(newInfo);
            case 'email':
                return user.updateEmail(newInfo);
            case 'password':
                return user.updatePassword(newInfo);
            case 'phone':
                return user.updatePhoneNumber(newInfo);
        }
    }
};

function deleteUser(){
    let user = currentUser;
    if(user){
        return user.delete();
    }
};

function verifyUser(){
    let user = currentUser;
    if(!user.emailVerified){
        return user.sendEmailVerification();
    }
};

function recoverPassword(){
    let user = currentUser;
    if(user){
        return firebase.auth().sendPasswordResetEmail(user.email);
    }
}

function getCurrentUser(){
    return currentUser;
}

