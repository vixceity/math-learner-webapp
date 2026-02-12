package com.example.mathlearner.controller;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.example.mathlearner.model.AppUser;
import com.example.mathlearner.repository.AppUserRepository;

@Controller
public class AuthController {

    private final AppUserRepository repo;
    private final PasswordEncoder encoder;

    public AuthController(AppUserRepository repo, PasswordEncoder encoder) {
        this.repo = repo;
        this.encoder = encoder;
    }

    @PostMapping("/signup")
    public String doSignup(@RequestParam String username,
                           @RequestParam String email,
                           @RequestParam String password,
                           Model model) {

        username = username.trim();
        email = email.trim().toLowerCase();

        if (password.length() < 8) {
            model.addAttribute("registerError", "Password must be at least 8 characters.");
            return "Signup";
        }

        if (username.isBlank() || email.isBlank() || password.isBlank()) {
            model.addAttribute("registerError", "All fields are required.");
            return "Signup";
        }



        // basic checks
        if (repo.existsByUsername(username)) {
            model.addAttribute("registerError", "Username already taken.");
            return "Signup";
        }
        if (repo.existsByEmail(email)) {
            model.addAttribute("registerError", "Email already in use.");
            return "Signup";
        }

        String hash = encoder.encode(password);
        repo.save(new AppUser(username, email, hash));

        // send them to login (your login is /login)
        return "redirect:/signup?registered=1";

    }
}
