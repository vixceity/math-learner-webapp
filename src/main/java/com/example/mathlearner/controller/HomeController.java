package com.example.mathlearner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home(Model model){
        return "index";
    }

    @GetMapping("/signup")
    public String login(Model model) {
        return "Signup";
    }

    @GetMapping("/about")
    public String about(Model model) {
        return "About";
    }

    @GetMapping("/courses")
    public String courses(Model model) {
        return "courses";
    }
}
