$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FuncionarioTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Funcionário",
  "description": "A funcionalidade Funcionário permite a criar/editar/excluir funcionários no sistemas através de um perfil já autenticado.",
  "id": "funcionário",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "CT03 - Cadastrar novo funcionário",
  "description": "",
  "id": "funcionário;ct03---cadastrar-novo-funcionário",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 7,
  "name": "o usuário autenticado acessa a tela de Funcionários",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "clica em Novo Funcionário",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "preenche os campos obrigatórios com dados válidos",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clica em Submit Query",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o Funcionário foi criado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "NovoFuncionarioStep.oUsuárioAutenticadoAcessaATelaDeFuncionários()"
});
formatter.result({
  "duration": 13559994200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using css selector\u003d[href\u003d\u0027/empregados/\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QGTSUN7\u0027, ip: \u0027192.168.1.65\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebSite.PageObjects.NovoFuncionario.NovoFuncionarioPage.clicarFuncionario(NovoFuncionarioPage.java:25)\r\n\tat WebSite.Steps.NovoFuncionarioStep.oUsuárioAutenticadoAcessaATelaDeFuncionários(NovoFuncionarioStep.java:16)\r\n\tat ✽.Dado o usuário autenticado acessa a tela de Funcionários(FuncionarioTest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NovoFuncionarioStep.clicaEmNovoFuncionário()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NovoFuncionarioStep.preencheOsCamposObrigatóriosComDadosVálidos()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NovoFuncionarioStep.clicaEmSubmitQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NovoFuncionarioStep.oFuncionárioFoiCriadoComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "CT04 - Editar Funcionário",
  "description": "",
  "id": "funcionário;ct04---editar-funcionário",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 14,
  "name": "o usuário autenticado acessa a tela de Funcionários",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "realiza uma busca pelo nome do funcionário desejado",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "clica no ícone de lápis",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "altera os valores dos campos Nome e Salário",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "clica em Submit Query",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o Funcionário é alterado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "NovoFuncionarioStep.oUsuárioAutenticadoAcessaATelaDeFuncionários()"
});
formatter.result({
  "duration": 23137788200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using css selector\u003d[href\u003d\u0027/empregados/\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QGTSUN7\u0027, ip: \u0027192.168.1.65\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebSite.PageObjects.NovoFuncionario.NovoFuncionarioPage.clicarFuncionario(NovoFuncionarioPage.java:25)\r\n\tat WebSite.Steps.NovoFuncionarioStep.oUsuárioAutenticadoAcessaATelaDeFuncionários(NovoFuncionarioStep.java:16)\r\n\tat ✽.Dado o usuário autenticado acessa a tela de Funcionários(FuncionarioTest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FuncionarioStep.realizaUmaBuscaPeloNomeDoFuncionárioDesejado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FuncionarioStep.clicaNoÍconeDeLápis()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FuncionarioStep.alteraOsValoresDosCamposNomeESalário()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NovoFuncionarioStep.clicaEmSubmitQuery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FuncionarioStep.oFuncionárioÉAlteradoComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "CT05 - Deletar Funcionário",
  "description": "",
  "id": "funcionário;ct05---deletar-funcionário",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 22,
  "name": "o usuário autenticado acessa a tela de Funcionários",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "realiza uma busca pelo nome do funcionário desejado",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "clica no ícone de lixeira",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o Funcionário é deletado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "NovoFuncionarioStep.oUsuárioAutenticadoAcessaATelaDeFuncionários()"
});
formatter.result({
  "duration": 28639392700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[href\u003d\u0027/empregados/\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QGTSUN7\u0027, ip: \u0027192.168.1.65\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\LEANDR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63654}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6edd83356e0dc24dff60747f0fbc9da0\n*** Element info: {Using\u003dcss selector, value\u003d[href\u003d\u0027/empregados/\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebSite.PageObjects.NovoFuncionario.NovoFuncionarioPage.clicarFuncionario(NovoFuncionarioPage.java:25)\r\n\tat WebSite.Steps.NovoFuncionarioStep.oUsuárioAutenticadoAcessaATelaDeFuncionários(NovoFuncionarioStep.java:16)\r\n\tat ✽.Dado o usuário autenticado acessa a tela de Funcionários(FuncionarioTest.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FuncionarioStep.realizaUmaBuscaPeloNomeDoFuncionárioDesejado()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FuncionarioStep.clicaNoÍconeDeLixeira()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FuncionarioStep.oFuncionárioÉDeletadoComSucesso()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("LoginTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "A funcionalidade Login permite acesso para criar/editar/excluir funcionários no sistemas.",
  "id": "login",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 6,
  "name": "CT01 - Cadastrar novo usuário no sistema InMetrics InmRobo",
  "description": "",
  "id": "login;ct01---cadastrar-novo-usuário-no-sistema-inmetrics-inmrobo",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 7,
  "name": "o usuário não autenticado acessa a tela de Login InMetrics InmRobo",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "clica em Cadastre-se",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "preenche os campos \u0027usuário\u0027,\u0027senha\u0027 e \u0027confirmeSenha\u0027",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clica em Cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "o usuário foi criado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.oUsuárioNãoAutenticadoAcessaATelaDeLoginInMetricsInmRobo()"
});
formatter.result({
  "duration": 5122767000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicaEmCadastreSe()"
});
formatter.result({
  "duration": 790897400,
  "status": "passed"
});
formatter.match({
  "location": "CadUsuarioStep.preencheOsCamposUsuarioSenhaEConfirmeSenha()"
});
formatter.result({
  "duration": 231969900,
  "status": "passed"
});
formatter.match({
  "location": "CadUsuarioStep.clicaEmCadastrar()"
});
formatter.result({
  "duration": 784135900,
  "status": "passed"
});
formatter.match({
  "location": "CadUsuarioStep.oUsuarioFoiCriadoComSucesso()"
});
formatter.result({
  "duration": 90531900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "CT02 - Logar no sistema InMetrics InmRobo",
  "description": "",
  "id": "login;ct02---logar-no-sistema-inmetrics-inmrobo",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 14,
  "name": "o usuário não autenticado acessa a tela de Login InMetrics InmRobo",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "preenche os campos usuário\u003d\"LeandroLima\" e senha\u003d\"QA123456\" com valores válidos",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "clica em Entre",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o usuário é autenticado no sistema com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginStep.oUsuárioNãoAutenticadoAcessaATelaDeLoginInMetricsInmRobo()"
});
formatter.result({
  "duration": 5289875100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LeandroLima",
      "offset": 28
    },
    {
      "val": "QA123456",
      "offset": 50
    }
  ],
  "location": "LoginStep.preencheOsCamposUsuárioESenhaComValoresVálidos(String,String)"
});
formatter.result({
  "duration": 201388500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicaEmEntre()"
});
formatter.result({
  "duration": 1033819200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.oUsuárioÉAutenticadoNoSistemaComSucesso()"
});
formatter.result({
  "duration": 9297640700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using css selector\u003d[aria-label\u003d\u0027Nome: activate to sort column descending\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QGTSUN7\u0027, ip: \u0027192.168.1.65\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebSite.PageObjects.Login.LoginPage.validarLogin(LoginPage.java:20)\r\n\tat WebSite.Steps.LoginStep.oUsuárioÉAutenticadoNoSistemaComSucesso(LoginStep.java:20)\r\n\tat ✽.Então o usuário é autenticado no sistema com sucesso(LoginTest.feature:17)\r\n",
  "status": "failed"
});
});