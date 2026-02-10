package com.example.mathlearner.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {
    @GetMapping("/") //this is the home page
    public String index(Model model){
        return "index";
    }

    @GetMapping("/signup")
    public String signup(Model model) { return "Signup"; }


    @GetMapping("/about")
    public String about(Model model) {
        return "About";
    }

    @GetMapping("/courses")
    public String courses(Model model) {
        return "courses";
    }

    @GetMapping("/algebra1")
    public String algebra1(Model model) {
        return "algebra1";
    }

    @GetMapping("/notes")
    public String notes(Model model) {
        return "notes";
    }

    @GetMapping("/geometry")
    public String geometry(Model model) {
        return "geometry";
    }

    @GetMapping("/algebra2")
    public String algebra2(Model model) {
        return "algebra2";
    }
    @GetMapping("/home")
    public String home(Model model) {
        return "home";
    }

    @GetMapping("/calendar")
    public String calendar(Model model) {return "calendar";}

    @GetMapping("/course")
    public String course(Model model) {return "course";}

}
