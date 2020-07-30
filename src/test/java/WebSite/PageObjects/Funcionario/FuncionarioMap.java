package WebSite.PageObjects.Funcionario;

import WebSite.Base.Hooks;
import org.openqa.selenium.By;

public class FuncionarioMap extends Hooks {

    public static final By DELETAR = By.xpath("/html/body/div/div[2]/div/table/tbody/tr[1]/td[6]/a[1]/button");

    public static final By PESQUISAR = By.cssSelector("[type='search']");

    public static final By EDITAR = By.cssSelector("[class='btn btn-warning']");

    public static final By NOME_EDITADO = By.id("inputNome");

    public static final By SALARIO_EDITADO = By.id("dinheiro");
}
