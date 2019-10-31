package myRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="C:\\Users\\Training_h2a.06.17\\Downloads\\cucjenkins23\\cucjenkins23\\features\\logintest.feature", 
glue={"stepDefs"},
monochrome=true,
plugin= {"pretty","json:target/cucumber.json"}
			)

public class myRunner {

}

