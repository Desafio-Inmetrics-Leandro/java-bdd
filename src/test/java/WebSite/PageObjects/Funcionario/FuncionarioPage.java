package WebSite.PageObjects.Funcionario;

public class FuncionarioPage extends FuncionarioMap {

    public void buscarFuncionario() {
        driver.findElement(PESQUISAR).sendKeys("Leandro Lima");
    }

    public void editarFuncionario() {
        driver.findElement(NOME_EDITADO).clear();
        driver.findElement(NOME_EDITADO).sendKeys("Leandro Lima Editado");
        driver.findElement(SALARIO_EDITADO).clear();
        driver.findElement(SALARIO_EDITADO).sendKeys("200000");
    }

    public void clicarEditar() {
        driver.findElement(EDITAR).click();
    }

    public void clicarExcluir() {
        driver.findElement(DELETAR).click();
    }
}
