package WebSite.Steps;

import WebSite.PageObjects.Funcionario.FuncionarioPage;
import WebSite.PageObjects.NovoFuncionario.NovoFuncionarioPage;
import cucumber.api.java.pt.*;

public class FuncionarioStep extends FuncionarioPage {

    NovoFuncionarioPage func = new NovoFuncionarioPage();

    @E("^clica no ícone de lápis$")
    public void clicaNoÍconeDeLápis() {
        clicarEditar();
    }

    @Então("^o Funcionário é alterado com sucesso$")
    public void oFuncionárioÉAlteradoComSucesso() {
        func.validarCadastro();
        fecharNavegador();
    }

    @E("^clica no ícone de lixeira$")
    public void clicaNoÍconeDeLixeira() {
        clicarExcluir();
    }

    @Então("^o Funcionário é deletado com sucesso$")
    public void oFuncionárioÉDeletadoComSucesso() {
        func.validarCadastro();
        fecharNavegador();
    }

    @Quando("^realiza uma busca pelo nome do funcionário desejado$")
    public void realizaUmaBuscaPeloNomeDoFuncionárioDesejado() {
        buscarFuncionario();
    }

    @Quando("^altera os valores dos campos Nome e Salário$")
    public void alteraOsValoresDosCamposNomeESalário() {
        editarFuncionario();
    }
}
