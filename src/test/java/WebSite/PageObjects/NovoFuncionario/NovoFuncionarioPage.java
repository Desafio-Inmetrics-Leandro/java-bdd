package WebSite.PageObjects.NovoFuncionario;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

public class NovoFuncionarioPage extends  NovoFuncionarioMap{

    public void preencherCamposCadFuncionario() {
        driver.findElement(NOME).sendKeys("Leandro Lima");
        driver.findElement(CARGO).sendKeys("Analista QA");
        driver.findElement(CPF).sendKeys("607.433.160-02");
        driver.findElement(SALARIO).sendKeys("100000");
        Select drp = new Select(driver.findElement(SEXO));
        drp.selectByVisibleText("Masculino");
        driver.findElement(CLT).click();
        driver.findElement(ADMISSAO).sendKeys("10102019");
    }

    public void clicarNovoFuncionario() {
        driver.findElement(NOVO_FUNCIONARIO).click();
    }

    public void clicarFuncionario() {
        driver.findElement(FUNCIONARIO).click();
    }

    public void clicarSubmit() {
        driver.findElement(CADASTRAR).click();
    }

    public void validarCadastro(){
        String textoElement = driver.findElement(SUCESSO).getText();
        Assert.assertThat(textoElement, CoreMatchers.containsString("SUCESSO"));
    }
}
