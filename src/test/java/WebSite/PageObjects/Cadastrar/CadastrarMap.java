package WebSite.PageObjects.Cadastrar;

import WebSite.Base.Hooks;
import org.openqa.selenium.By;

public class CadastrarMap extends Hooks {

    public static final By USUARIO = By.name("username");

    public static final By SENHA = By.cssSelector("[name=pass]");

    public static final By CONFIRMA_SENHA = By.cssSelector("[name=confirmpass]");

    public static final By VALIDA = By.cssSelector("[class*='title']");

    public static final By BOTAO_CADASTRAR = By.cssSelector("[class*='txt2']");
}
