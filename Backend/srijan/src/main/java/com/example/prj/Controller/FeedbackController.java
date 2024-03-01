package com.example.prj.Controller;

import com.example.prj.entity.Feedback;
import com.example.prj.pojo.FeedbackPojo;
import jakarta.validation.Valid;
import com.example.prj.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/Feedback")
@RestController
@RequiredArgsConstructor

public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping("/save")
    public String saveFeedback( @RequestBody FeedbackPojo feedbackPojo){
        feedbackService.saveFeedback(feedbackPojo);
        return "data created successfully";
    }

    @GetMapping("/getAll")
    public List<Feedback> getAllData(){
        return feedbackService.getAllData();
    }

    @GetMapping("/getById/{id}")
    public Optional<Feedback> getDataBtId(@PathVariable("id") Integer id){
        return feedbackService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        feedbackService.deleteById(id);
    }

    @PutMapping("/{id}/show")
    public void showFeedback(@PathVariable("id") Integer id) {
        feedbackService.showFeed(id);
    }

    @PutMapping("/{id}/hide")
    public void hideFeedback(@PathVariable("id") Integer id) {
        feedbackService.hideFeed(id);
    }


}
