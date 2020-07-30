package WebSite.Base;

import org.junit.Assert;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class Hooks {

    public static WebDriver driver;
    protected WebDriverWait wait;
    public static WebDriver getDriver() {
        return driver;
    }

    public void acessarURLChrome() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\leandro-lima\\Downloads\\chromedriver_win32\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        Map<String, Object> prefs = new HashMap<String, Object>();
        prefs.put("profile.managed_default_content_settings.geolocation", 2);
        options.setExperimentalOption("prefs", prefs);
        options.addArguments("disable-infobars");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-gpu");
        options.addArguments("--window-size=1600,1200");
        options.addArguments("--disable-extensions");
        //options.addArguments("--headless");
        driver = new ChromeDriver(options);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.get("http://www.inmrobo.tk/accounts/login/");
    }

    public void waitVisibility(WebElement element) throws IOException {
        try {
            wait = new WebDriverWait(getDriver(), 40);
            wait.until(ExpectedConditions.visibilityOf(element));
        } catch (TimeoutException e) {
            Assert.fail();
        }
    }

    public void fecharNavegador() {
        driver.close();
    }

    public String gerarNome() {
        Random random = new Random();
        String nome= random.toString();
        return nome;
    }
}
