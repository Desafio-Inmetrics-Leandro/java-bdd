package WebSite.PageObjects.Login;

import static org.junit.Assert.assertEquals;

public class LoginPage extends LoginMap {

    public void preencherCredenciais(String usuario, String senha) {
        driver.findElement(USUARIO).sendKeys(usuario);
        driver.findElement(SENHA).sendKeys(senha);
    }
    public void clicarEntrar() {
        driver.findElement(ENTRAR).click();
    }

    public void clicarCadastreSe() {
        driver.findElement(BOTAO_CADASTRAR).click();
    }

    public void validarLogin(){
        String textoElement = driver.findElement(VALIDA).getText();
        assertEquals("Nome", textoElement);
    }
}
