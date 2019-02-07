package com.polariod.database;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.polariod.config.AppException;
import com.polariod.model.Foreman;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class ForemanTableGateway {
	
	private Connection conn;
	
	public ForemanTableGateway(Connection conn) {
		this.conn = conn;
	}
	public void deleteForeman(Foreman foreman) throws AppException {
		PreparedStatement st = null;
		try {
			st = conn.prepareStatement("delete from ------ where id = ?");

			st.setInt(1, foreman.getId());
			st.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException(e);
		} finally {
			try {
				if(st != null)
					st.close();
			} catch (SQLException e) {
				e.printStackTrace();
				throw new AppException(e);
			}
		}
	}
	
	public void insertForemam(Foreman foreman) throws AppException {
		PreparedStatement st = null;
		try {
			String sql = "insert into ------ "
					+ " (username, password) "
					+ " values (?, ?, ?, ?, ?) ";
			st = conn.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
			st.setString(1, foreman.getUsername());
			st.setString(2, foreman.getPassword());
			st.executeUpdate();
			ResultSet rs = st.getGeneratedKeys();
			rs.first();
			foreman.setId(rs.getInt(1));

			
			rs.close();

		} catch (SQLException e) {
			throw new AppException(e);
		} finally {
			try {
				st.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	public void updateBook(Foreman foreman) throws AppException {
		PreparedStatement st = null;
		try {
			st = conn.prepareStatement("update ------- set username = ?, password = ? where id = ?");
			st.setString(1, foreman.getUsername());
			st.setString(2, foreman.getPassword());
			st.setInt(5, foreman.getId());
			st.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException(e);
		} finally {
			try {
				if(st != null)
					st.close();
			} catch (SQLException e) {
				e.printStackTrace();
				throw new AppException(e);
			}
		}
	}
	
	public List<Foreman> getForeman() throws AppException {
		List<Foreman> foremans = new ArrayList<>();

		PreparedStatement st = null;

		try {
			st = conn.prepareStatement("select * from ------ order by username");

			ResultSet rs = st.executeQuery();
			while(rs.next()) {

				Foreman foreman = new Foreman();
				
				foreman.setUsername(rs.getString("username"));
				foreman.setPassword(rs.getString("password"));
				foreman.setGateway(this);
				foreman.setId(rs.getInt("id"));
				
				
				foremans.add(foreman);
			}
		} catch (SQLException e) {
			throw new AppException(e);
		} finally {
			try {
				if(st != null)
					st.close();
			} catch (SQLException e) {
				e.printStackTrace();
				throw new AppException(e);
			}
		}
		return foremans;
	}
	
}
