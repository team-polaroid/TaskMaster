package com.polariod.model;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import com.polariod.database.ForemanTableGateway;

import javafx.beans.property.SimpleStringProperty;

@EntityScan(basePackages = "Foreman")
public class Foreman {
	
	private Integer id;
	private SimpleStringProperty username;
	private SimpleStringProperty password;
	
	private ForemanTableGateway foremanGateway;
	
	public Foreman() {
		username = new SimpleStringProperty();
		password = new SimpleStringProperty();
		id = 0;
	}
	
	public Foreman(String username, String password) {
		this();
		setUsername(username);
		setPassword(password);
	}

	@Override
	public String toString() {
		return getUsername() + " " + getPassword();
	}	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public ForemanTableGateway getGateway() {
		return foremanGateway;
	}

	public void setGateway(ForemanTableGateway foremanGateway) {
		this.foremanGateway = foremanGateway;
	}

	public SimpleStringProperty usernameProperty() {
		return username;
	}

	public void setUsername(String username) {
		this.username.set(username);
	}
	
	public String getUsername() {
		return username.get();
	}
	
	public SimpleStringProperty passwordProperty() {
		return username;
	}

	public void setPassword(String password) {
		this.password.set(password);
	}
	
	public String getPassword() {
		return password.get();
	}

	
}
