
function createUser(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};


function login(email, password){
    return firebase.auth().loginWithEmailAndPassword(email, password);
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

function currentUser(){
    firebase.auth().languageCode = 'pt';
    return firebase.auth().currentUser;
};

function updateUser(field, newInfo){
    let user = currentUser();
    if(user){
        let functions = {
            'profile': user.updateProfile,
            'email': user.updateEmail,
            'password': user.updatePassword,
            'phone': user.updatePhoneNumber
        };
        functions[field](newInfo);
    }
};

function deleteUser(){
    let user = currentUser();
    if(user){
        return user.delete();
    }
};

function verifyUser(){
    let user = currentUser();
    if(!user.emailVerified){
        return user.sendEmailVerification();
    }
};

function recoverPassword(){
    let user = currentUser();
    if(user){
        return firebase.auth().sendPasswordResetEmail(user.email);
    }
}