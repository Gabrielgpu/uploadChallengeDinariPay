$('#form').submit(function () {
  var nome = $('#nome')
  var cpf = $('#cpf')
  var email = $('#email')
  var senha = $('#senha')
  var csenha = $('#csenha')
  var data = $('#data')
  var erro = $('.alert')
  var campo = $('#campo-erro')

  // Remove o elemento da tela smpre que tentar submeter o formulario
  erro.addClass('d-none')
  $('.is-invalid').removeClass('is-invalid')
  // Valida o campo nome
  if (nome.val() == '') {
    erro.removeClass('d-none')
    campo.html('nome') // nome do campo que não foi preenchido
    nome.focus()
    nome.addClass('is-invalid')

    return false
  }
  // Valida o campo CPF
  if (cpf.val() == '') {
    erro.removeClass('d-none')
    campo.html('CPF') // nome do campo que não foi preenchido
    cpf.focus()
    cpf.addClass('is-invalid')
    return false
  }
  // Valida o campo E-mail
  if (email.val() == '') {
    erro.removeClass('d-none')
    campo.html('email') // nome do campo que não foi preenchido
    email.focus()
    email.addClass('is-invalid')
    return false
  }
  // Valida o Campo Senha
  if (senha.val() == '') {
    erro.removeClass('d-none')
    campo.html('senha') // nome do campo que não foi preenchido
    senha.focus()
    senha.addClass('is-invalid')
    return false
  }

  // Valida o Campo Confirmar senha
  if (csenha.val() == '') {
    erro.removeClass('d-none')
    campo.html('Confirmar senha') // nome do campo que não foi preenchido
    csenha.focus()
    csenha.addClass('is-invalid')
    return false
  }
  // Valida o Campo Data
  if (data.val() == '') {
    erro.removeClass('d-none')
    campo.html('data') // nome do campo que não foi preenchido
    data.focus()
    data.addClass('is-invalid')
    return false
  }
})

$('#cpf').mask('000.000.000-00', { reverse: true })
