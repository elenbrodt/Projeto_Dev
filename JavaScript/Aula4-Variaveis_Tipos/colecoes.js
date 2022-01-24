
const getAdmins = (map) => {
  let admins = [];
  for ([key, value] of map){
    if (value === "admin"){
      admins.push(key)
    }
  } 
  return admins;
}

const usuarios = new Map();

usuarios.set ('Alexandre','admin');
usuarios.set ('Fernando', 'admin');
usuarios.set ('Elen', 'user');
usuarios.set ('Gabriel', 'admin');

console.log(getAdmins(usuarios));
