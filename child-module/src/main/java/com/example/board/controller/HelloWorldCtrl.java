package com.example.board.controller;


import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloWorldCtrl {

    @GetMapping("/hello")
    public String helloWorld() {
        return "실행되었습니다 현재,,,,,!";
    }
}
