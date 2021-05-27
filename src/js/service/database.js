
const firebaseRooms = firebase.firestore().collection('rooms');

function saveRoom(room){
    const {code, ...newRoom} = room;
    return firebaseRooms.doc(code).set(newRoom);
};


function getRoom(code){
    return firebaseRooms.doc(code).get().then(room => room.data());
};

function updateRoom(code, newInfo){
    return firebaseRooms.doc(code).update(newInfo);
}

function deleteRoom(code){
    return firebaseRooms.doc(code).delete();
}

function getRooms(){
    return firebaseRooms.get().then(snapshot =>
        snapshot.docs.map(room => room.data())
    );
}

function getRoomsOrdered(field, direction='asc'){
    return firebaseRooms.orderBy(field, direction).get().then(snapshot =>
        snapshot.docs.map(room => room.data())
    );
}