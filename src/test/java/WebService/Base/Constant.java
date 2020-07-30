package WebService.Base;

import io.restassured.http.ContentType;

public interface Constant {
	
	String baseUrl = "https://inm-api-test.herokuapp.com/empregado/";
	ContentType content = ContentType.JSON;
	Long MAX_TIMEOUT = 20000L;
	Integer port = 443;
	String basePath="";
}
