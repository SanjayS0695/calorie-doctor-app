package com.caloriedoc.authservice.api;

import com.caloriedoc.authservice.model.AuthRequest;
import com.caloriedoc.authservice.model.AuthResponse;
import com.caloriedoc.authservice.util.JwtUtil;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("apis/login")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping
    public ResponseEntity<AuthResponse> authenticateUser(@RequestBody @NonNull AuthRequest authRequest) throws  Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        } catch(BadCredentialsException exception) {
            throw new Exception("Invalid username/password!!", exception);
        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
        return  ResponseEntity.ok(new AuthResponse(jwtUtil.generateToken(userDetails)));
    }
}
