async function esperarUmSegundo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("esperando um segundo");
        }, 1000)
    
    })
   
}
async function esperarDoisSegundos() {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve("esperar dois segundos");
    }, 2000)
})
}

async function esperarTudo() {
 try {
    const resultado1 = await esperarUmSegundo();
    console.log(resultado1)
    const resultado2 = await esperarDoisSegundos();
    console.log(resultado2)
    console.log("tudo pronto")
 } catch (error) {
    console.log("error ao imprimir dados: ", error)
 }
}
esperarTudo();


async function obterUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await  response.json()
    return usuarios
   
  } catch (error) {
    alert("erro ao imprimir nome de usuario")
    console.log("error ao imprimir o nome do usuario:", error)
  }
  
}
obterUsuarios().then((usuarios) => console.log(usuarios[0].name));
obterUsuarios().then((usuarios) => console.log(usuarios));


//Crie uma função chamada multiplicar que aceita um número e 
//retorna uma promessa que resolve com esse número multiplicado por 2 após//
// 1 segundo. Use essa função para multiplicar um número e, em seguida, multiplicar o resultado novamente.


async function multiplicar(num) {
   return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000)
    })
}


// Teste a função
async function executar() {
    const resultado = await multiplicar(5);
    const resultadoFinal = await multiplicar(resultado);
    console.log(resultadoFinal); // Deve imprimir 20
}

executar();
