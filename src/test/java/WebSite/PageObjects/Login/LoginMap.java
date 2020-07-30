package WebSite.PageObjects.Login;

import WebSite.Base.Hooks;
import org.openqa.selenium.By;

public class LoginMap extends Hooks {

    public static final By USUARIO = By.name("username");

    public static final By SENHA = By.cssSelector("[name=pass]");

    public static final By ENTRAR = By.cssSelector("[class=login100-form-btn]");

    public static final By VALIDA = By.cssSelector("[aria-label='Nome: activate to sort column descending']");

    public static final By BOTAO_CADASTRAR = By.cssSelector("[class*='txt2']");
}
