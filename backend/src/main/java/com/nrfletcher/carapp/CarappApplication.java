package com.nrfletcher.carapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarappApplication {

	/*
	*	We launch our backend services from here using SpringApplication.run()
	* 	All mappings become active once our server is up and running
	*
	 */

	public static void main(String[] args) {
		SpringApplication.run(CarappApplication.class, args);
	}

}
