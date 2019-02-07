package com.polariod.restapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class RestAPIController {
 
	@RequestMapping("/cs4783/project")
	public String project() {
		return "Hello world what is up ! >>> Message from <a href='https://grokonez.com' target='_blank'>grokonez.com</a>";
	}
}
