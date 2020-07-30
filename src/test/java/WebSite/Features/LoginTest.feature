#language: pt

Funcionalidade: Login
  A funcionalidade Login permite acesso para criar/editar/excluir funcionários no sistemas.

  Cenário: CT01 - Cadastrar novo usuário no sistema InMetrics InmRobo
    Dado o usuário não autenticado acessa a tela de Login InMetrics InmRobo
    E clica em Cadastre-se
    Quando preenche os campos 'usuário','senha' e 'confirmeSenha'
    E clica em Cadastrar
    Então o usuário foi criado com sucesso

  Cenário: CT02 - Logar no sistema InMetrics InmRobo
    Dado o usuário não autenticado acessa a tela de Login InMetrics InmRobo
    Quando preenche os campos usuário="LeandroLima" e senha="QA123456" com valores válidos
    E clica em Entre
    Então o usuário é autenticado no sistema com sucesso