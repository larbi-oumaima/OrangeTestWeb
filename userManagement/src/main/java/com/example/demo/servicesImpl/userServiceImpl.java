package com.example.demo.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.models.superUSer;
import com.example.demo.services.userService;
import com.example.demo.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;

@Service

public class userServiceImpl implements userService {
@Autowired
private userRepository userRepository;
	

	@Override
	public superUSer findById(long id) {
		Optional<superUSer>	user=userRepository.findById(id);
		return user.isPresent() ? user.get():null;
	}


	@Override
	public List<superUSer> getAllsuperUSers() {
		System.out.print(userRepository.findAll());//pour vérifier
		return userRepository.findAll();
	}


	@Override
	public void delete(Long id) {
		userRepository.deleteById(id);		
	}


	@Override
	public superUSer addUser(superUSer p) {
		return userRepository.save(p);
	}
	
}
