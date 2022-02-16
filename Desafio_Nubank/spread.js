const user = {
  firstName: 'Elen',
  lastName: 'Brodt',
}

function nomeCompleto (user) {
  return {
    ...user, 
    fullName: `${user.firstName} ${user.lastName}`
    }
} 

const userNomeCompleto = nomeCompleto(user);

console.log(userNomeCompleto);