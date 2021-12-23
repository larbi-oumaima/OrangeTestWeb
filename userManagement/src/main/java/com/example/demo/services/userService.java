package com.example.demo.services;
import java.util.List;

import com.example.demo.models.superUSer;


public interface userService {
	public List<superUSer>getAllsuperUSers();
	public void delete(Long id);
	public superUSer addUser(superUSer p);
	public superUSer findById(long id);
}
