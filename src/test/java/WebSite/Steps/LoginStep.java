package WebSite.Steps;

import WebSite.PageObjects.Login.LoginPage;
import cucumber.api.java.pt.*;

public class LoginStep extends LoginPage {

    @Dado("^o usuário não autenticado acessa a tela de Login InMetrics InmRobo$")
    public void oUsuárioNãoAutenticadoAcessaATelaDeLoginInMetricsInmRobo() throws Throwable {
        acessarURLChrome();
    }

    @E("^clica em Entre$")
    public void clicaEmEntre() {
        clicarEntrar();
    }

    @Então("^o usuário é autenticado no sistema com sucesso$")
    public void oUsuárioÉAutenticadoNoSistemaComSucesso() {
        validarLogin();
        fecharNavegador();
    }

    @E("^clica em Cadastre-se$")
    public void clicaEmCadastreSe() {
        clicarCadastreSe();
    }

    @Quando("^preenche os campos usuário=\"([^\"]*)\" e senha=\"([^\"]*)\" com valores válidos$")
    public void preencheOsCamposUsuárioESenhaComValoresVálidos(String arg0, String arg1) throws Throwable {
        preencherCredenciais(arg0, arg1);
    }
}
