#language: pt

Funcionalidade: Funcionário
  A funcionalidade Funcionário permite a criar/editar/excluir funcionários no sistemas através de um perfil já autenticado.

  Cenário: CT03 - Cadastrar novo funcionário
    Dado o usuário autenticado acessa a tela de Funcionários
      E clica em Novo Funcionário
    Quando preenche os campos obrigatórios com dados válidos
      E clica em Submit Query
    Então o Funcionário foi criado com sucesso

  Cenário: CT04 - Editar Funcionário
    Dado o usuário autenticado acessa a tela de Funcionários
    Quando realiza uma busca pelo nome do funcionário desejado
      E clica no ícone de lápis
    Quando altera os valores dos campos Nome e Salário
      E clica em Submit Query
    Então o Funcionário é alterado com sucesso

  Cenário: CT05 - Deletar Funcionário
    Dado o usuário autenticado acessa a tela de Funcionários
    Quando realiza uma busca pelo nome do funcionário desejado
      E clica no ícone de lixeira
    Então o Funcionário é deletado com sucesso