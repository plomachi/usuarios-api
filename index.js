const lista = require('./tarefa1/usuarios-api/users.json');

//Responsável por criar a função de listar todos os usuários acima de 18 anos.

const listarMaiores = () => {
    return users.filter((usuario) => usuario.idade) > 18
}
listarMaiores()