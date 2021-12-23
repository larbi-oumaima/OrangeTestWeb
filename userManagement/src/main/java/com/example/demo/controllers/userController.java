package com.example.demo.controllers;
import com.example.demo.services.userService;
import com.example.demo.models.superUSer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*") 
@RestController 
@RequestMapping("api/users")
public class userController {
	@Autowired
	private userService userSevice;

	@GetMapping("")
	public List<superUSer> getAllsuperUSers() {
		return userSevice.getAllsuperUSers();
	}

	

	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		userSevice.delete(id);
	}

	@PostMapping
	public superUSer add(@RequestBody superUSer p) {
		System.out.println (p);
		return userSevice.addUser(p);
	}

	@GetMapping("/{id}")
	public superUSer getClientsById(@PathVariable long id) {
		return userSevice.findById(id);
	}
}
