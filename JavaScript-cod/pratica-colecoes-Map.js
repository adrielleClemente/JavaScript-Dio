function getAdmins(map){
    let admins =[];
    for ([key,value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;    
}
const usuarios = new Map();

usuarios.set('Emma','Admin');
usuarios.set('Drika','Admin');
usuarios.set('Luiz','User');

console.log(getAdmins(usuarios))
//[ 'Emma', 'Drika' ]