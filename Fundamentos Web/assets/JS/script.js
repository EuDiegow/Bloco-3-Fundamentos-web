


/* Case Sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementByname()
por classe: getElementsByClassName()
por seletor:querySelector()

*/
var nome = window.document.querySelector('#nome')
nome.style.width = '35%'
Email.style.width = '35%'



var okNome = false
var okEmail = false
var okAssunto = false

function validarNome() {

    /* if(nome.value.length < 2) {*/
    let txtNome = document.getElementById('txtNome')
    if (nome.value.length < 3) {
        /* alert('Nome invalido')*/
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
        okNome = false
    } else {
        txtNome.innerHTML = 'deu bom!'
        txtNome.style.color = 'green'
        okNome = true
    }

}
function enviar() {
    if (okNome == true && okEmail == true && okAssunto == true) {
        alert('mensagem enviada com sucesso')
    }
    else{
        alert('preencha corretamente!')
    }
    }
   
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(Email.value.indexOf('@') == -1 || Email.value.indexOf('.')== -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        okEmail = false
    }
    else{
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        okEmail = true


    }
 }
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length >=100){
            txtAssunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres'
            txtAssunto.style.color = 'black'
            okAssunto = false
        }
    else{
        /*txtAssunto.style.display ='none' */
        txtAssunto.innerHTML = 'Texto valido'
        txtAssunto.style.color = 'black'
        okAssunto = true

    }


}
