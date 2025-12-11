package com.example.mathlearner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class HomeController {
    @GetMapping("/")
    public String index(Model model){
        return "index";
    }
}
