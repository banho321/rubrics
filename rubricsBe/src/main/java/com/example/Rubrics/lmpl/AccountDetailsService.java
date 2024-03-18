package com.example.Rubrics.lmpl;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface AccountDetailsService {
    UserDetails loadUserByEmail(String email) throws UsernameNotFoundException;
}
