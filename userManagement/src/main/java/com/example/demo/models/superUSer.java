package com.example.demo.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity

public class superUSer {


	@GeneratedValue(strategy=GenerationType.AUTO)
		@Id
		private Long id;
		private String nom;
		private String prenom;
		private String email;
		private String motDePasse;

}
