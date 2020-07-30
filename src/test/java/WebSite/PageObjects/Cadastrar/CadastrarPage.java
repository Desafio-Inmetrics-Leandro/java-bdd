package WebSite.PageObjects.Cadastrar;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;

public class CadastrarPage extends CadastrarMap {

    String geraNome = gerarNome();

    public void preencherCamposCad() {
        driver.findElement(USUARIO).sendKeys("LeandroLima"+geraNome);
        driver.findElement(SENHA).sendKeys("123456");
        driver.findElement(CONFIRMA_SENHA).sendKeys("123456");
    }

    public void clicarCadastrar() {
        driver.findElement(BOTAO_CADASTRAR).click();
    }

    public void validarCadastro(){
        String textoElement = driver.findElement(VALIDA).getText();
        Assert.assertThat(textoElement, CoreMatchers.containsString("Login"));
    }
}
