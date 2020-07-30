package WebService.Base;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import org.hamcrest.Matchers;
import org.junit.BeforeClass;
import io.restassured.RestAssured;

public class Hook implements Constant {

	@BeforeClass
	public static void setup() {
		RestAssured.baseURI = baseUrl;
		RestAssured.port = port;
		RestAssured.basePath = basePath;
		RequestSpecBuilder requisicaoBuilder = new RequestSpecBuilder();
		requisicaoBuilder.setContentType(content);
		RestAssured.requestSpecification = requisicaoBuilder.build();
		ResponseSpecBuilder responsBuilder = new ResponseSpecBuilder();
		responsBuilder.expectResponseTime(Matchers.lessThan(MAX_TIMEOUT));
		RestAssured.responseSpecification = responsBuilder.build();
		RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
	}
}
