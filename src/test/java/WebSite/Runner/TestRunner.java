package WebSite.Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        //tags = {""},
        features = {"src/test/java/WebSite/Features"},
        plugin = {"html:target/cucumber-reports"},
        glue = { "WebSite.Steps"},
        monochrome = true,
        dryRun = false
        )
public class TestRunner {
}
