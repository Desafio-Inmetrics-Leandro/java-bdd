package WebSite.PageObjects.NovoFuncionario;

import WebSite.Base.Hooks;
import org.openqa.selenium.By;

public class NovoFuncionarioMap extends Hooks {

    public static final By NOME = By.id("inputNome");

    public static final By CARGO = By.id("inputCargo");

    public static final By CPF = By.id("cpf");

    public static final By SALARIO = By.id("dinheiro");

    public static final By SEXO = By.id("slctSexo");

    public static final By ADMISSAO = By.id("inputAdmissao");

    public static final By PJ = By.id("pj");

    public static final By CLT = By.id("clt");

    public static final By CADASTRAR = By.cssSelector("[class=cadastrar-form-btn]");

    public static final By SUCESSO = By.xpath("/html/body/div/div[1]/div/strong");

    public static final By NOVO_FUNCIONARIO = By.cssSelector("[href='/empregados/new_empregado']");

    public static final By FUNCIONARIO = By.cssSelector("[href='/empregados/']");
}
