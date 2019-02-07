package com.polariod.config;

public class AppException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AppException(Exception e) {
		super(e);
	}
	
	public AppException(String msg) {
		super(msg);
	}
}

