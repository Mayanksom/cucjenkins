package stepDefs;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class loginstepdefs {
	WebDriver driver;
	@Given("I launch the demo web shop page")
	public void i_launch_the_demo_web_shop_page() {
		
	System.setProperty("webdriver.chrome.driver","C:\\\\MyDrivers\\\\chromedriver_win32\\\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://demowebshop.tricentis.com/login");
		    
	}

	@When("I provide valid {string} and {string}")
	public void i_provide_valid_and(String email, String password) {
		driver.findElement(By.id("Email")).sendKeys(email);
		driver.findElement(By.id("Password")).sendKeys(password);
	}

	@When("click on login button")
	public void click_on_login_button() {
		driver.findElement(By.xpath("//input[@value='Log in']")).click();
	    
	}

	@Then("I shall be able to login successfully")
	public void i_shall_be_able_to_login_successfully() {
		String title1;
		title1 = driver.getTitle();
		Assert.assertEquals("Demo Web Shop", title1);
		
	   
	}

}
