package com.example.Rubrics.entity;

import java.sql.Date;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "account",
       uniqueConstraints = {
           @UniqueConstraint(columnNames = "username"),
           @UniqueConstraint(columnNames = "email")
       })
public class Account {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @NotBlank
  @Size(max = 20)
  private String username;
  
  @NotBlank
  @Size(max = 50)
  @Email
  private String email;
  
  @NotBlank
  @Size(max = 120)
  private String password;
  
  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "account_roles", 
             joinColumns = @JoinColumn(name = "account_id"),
             inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  @Column(name = "verification_code", length = 64)
  private String verificationCode;
   
  private boolean enabled = false;
  
  private Date createDay = Date.valueOf(LocalDate.now());;
  public Account() {
  }

  public Account(String username, String email, String password) {
	    this.username = username;
	    this.email = email;
	    this.password = password;
	  }





public Account(Long id, @NotBlank @Size(max = 20) String username, @NotBlank @Size(max = 50) @Email String email,
		@NotBlank @Size(max = 120) String password, Set<Role> roles, String verificationCode, boolean enabled,
		Date createDay) {
	super();
	this.id = id;
	this.username = username;
	this.email = email;
	this.password = password;
	this.roles = roles;
	this.verificationCode = verificationCode;
	this.enabled = enabled;
	this.createDay = createDay;
}


public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public Set<Role> getRoles() {
	return roles;
}

public void setRoles(Set<Role> roles) {
	this.roles = roles;
}

public String getVerificationCode() {
	return verificationCode;
}

public void setVerificationCode(String verificationCode) {
	this.verificationCode = verificationCode;
}

public boolean isEnabled() {
	return enabled;
}

public void setEnabled(boolean enabled) {
	this.enabled = enabled;
}

public Date getCreateDay() {
	return createDay;
}

public void setCreateDay(Date createDay) {
	this.createDay = createDay;
}


  
}