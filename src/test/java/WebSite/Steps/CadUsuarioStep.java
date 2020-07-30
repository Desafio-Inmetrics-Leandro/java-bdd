package WebSite.Steps;

import WebSite.PageObjects.Cadastrar.CadastrarPage;
import cucumber.api.java.pt.*;

public class CadUsuarioStep extends CadastrarPage {

    @E("^clica em Cadastrar$")
    public void clicaEmCadastrar() {
        clicarCadastrar();
    }
    @Então("^o usuário foi criado com sucesso$")
    public void oUsuarioFoiCriadoComSucesso() {
        validarCadastro();
        fecharNavegador();
    }

    @Quando("^preenche os campos 'usuário','senha' e 'confirmeSenha'$")
    public void preencheOsCamposUsuarioSenhaEConfirmeSenha() {
        preencherCamposCad();
    }
}
