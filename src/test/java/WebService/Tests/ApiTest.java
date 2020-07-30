package WebService.Tests;

import static io.restassured.RestAssured.given;

import WebService.Base.Hook;
import org.junit.Test;

public class ApiTest extends Hook{

	@Test
	public void cadastrarUsuario() {
		given()
			.contentType(content)
			.body("{" +
					"\"admissao\":\"15/01/2011\"," +
					"\"cargo\": \"Analista\"," +
					"\"comissao\": \"2.00,00\"," +
					"\"cpf\": \"144.781.730-36\"," +
					"\"departamentoId\": 1," +
					"\"nome\": \"Leandro QA API\"," +
					"\"salario\": \"5.000,00\"," +
					"\"sexo\":\"m\"," +
					"\"tipoContratacao\":\"pj\"}")
			.auth().basic("inmetrics", "automacao")
		.when()
			.post("/cadastrar")
		.then().log().all()
			.statusCode(202);
	}

	@Test
	public void listarUsuarioCadastrado() {
		given()
			.auth().basic("inmetrics", "automacao")
		.when()
			.get("/list/282")
		.then().log().all()
			.statusCode(202);
	}
	
	@Test
	public void listarTodosUsuarios() {
		given()
			.auth().basic("inmetrics", "automacao")
		.when()
			.get("/list_all")
		.then().log().all()
			.statusCode(200);
	}
	
	@Test
	public void alterarUsuario() {
		given()
		.contentType(content)
		.body("{" +
				"\"admissao\":\"01/01/2005\"," +
				"\"cargo\": \"Analista de testes de Software\"," +
				"\"comissao\": \"500,00\"," +
				"\"cpf\": \"144.781.730-36\"," +
				"\"departamentoId\": 1," +
				"\"nome\": \"Leandro Lima API\"," +
				"\"salario\": \"6.000,00\"," +
				"\"sexo\":\"m\"," +
				"\"tipoContratacao\":\"clt\"}")
		.auth().basic("inmetrics", "automacao")
	.when()
		.put("/alterar/282")
	.then().log().all()
		.statusCode(202);
	}
}