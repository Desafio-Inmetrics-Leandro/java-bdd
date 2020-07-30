package WebSite.Steps;

import WebSite.PageObjects.Login.LoginPage;
import WebSite.PageObjects.NovoFuncionario.NovoFuncionarioPage;
import cucumber.api.java.pt.*;

public class NovoFuncionarioStep extends NovoFuncionarioPage {

    LoginPage logar = new LoginPage();

    @Dado("^o usuário autenticado acessa a tela de Funcionários$")
    public void oUsuárioAutenticadoAcessaATelaDeFuncionários() {
        acessarURLChrome();
        logar.preencherCredenciais("LeandroLima","QA123456");
        logar.clicarEntrar();
        clicarFuncionario();
    }

    @E("^clica em Novo Funcionário$")
    public void clicaEmNovoFuncionário() {
        clicarNovoFuncionario();
    }

    @Quando("^preenche os campos obrigatórios com dados válidos$")
    public void preencheOsCamposObrigatóriosComDadosVálidos() {
        preencherCamposCadFuncionario();
    }

    @E("^clica em Submit Query$")
    public void clicaEmSubmitQuery() {
        clicarSubmit();
    }

    @Então("^o Funcionário foi criado com sucesso$")
    public void oFuncionárioFoiCriadoComSucesso() {
        validarCadastro();
        fecharNavegador();
    }
}
