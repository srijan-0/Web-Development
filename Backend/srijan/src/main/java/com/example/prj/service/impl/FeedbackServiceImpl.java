package com.example.prj.service.impl;

import com.example.prj.entity.Feedback;
import com.example.prj.pojo.FeedbackPojo;
import com.example.prj.repository.FeedbackRepository;
import com.example.prj.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;
    @Override
    public void saveFeedback(FeedbackPojo feedbackPojo) {

        Feedback feedback = new Feedback();

        if(feedbackPojo.getId()!=null){
            feedback=feedbackRepository.findById(feedbackPojo.getId())
                    .orElseThrow(()-> new NoSuchElementException("No data found"));
        }

        feedback.setUserName(feedbackPojo.getUserName());
        feedback.setUserEmail(feedbackPojo.getUserEmail());
        feedback.setUserFeedback(feedbackPojo.getUserFeedback());
//        feedback.setUserFeedback(PasswordEncoderUtil.getInstance().encode(feedbackPojo.getUserFeedback()));


        feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getAllData() {
        return feedbackRepository.findAll(); // select * from users
    }

    @Override
    public Optional<Feedback> getById(Integer id) {
        return feedbackRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        feedbackRepository.deleteById(id);
    }

    @Override
    public Optional<Feedback> getFeedbackByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public Optional<Boolean> showFeed(Integer id) {
        Optional<Feedback> feedbackOptional = feedbackRepository.findById(id);
        if (feedbackOptional.isPresent()) {
            Feedback feedback = feedbackOptional.get();
            feedback.setShow(true); // Assuming setShow method exists in Feedback entity
            feedbackRepository.save(feedback);
            return Optional.of(true); // Successfully showed feedback
        } else {
            return Optional.empty(); // Feedback with the given ID not found
        }
    }

    @Override
    public Optional<Boolean> hideFeed(Integer id) {
        Optional<Feedback> feedbackOptional = feedbackRepository.findById(id);
        if (feedbackOptional.isPresent()) {
            Feedback feedback = feedbackOptional.get();
            feedback.setShow(false); // Assuming setShow method exists in Feedback entity
            feedbackRepository.save(feedback);
            return Optional.of(true); // Successfully hidden feedback
        } else {
            return Optional.empty(); // Feedback with the given ID not found
        }
    }


    @Override
    public Optional<Feedback> getByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public Optional<Feedback> getUserByEmail(String email) {
        return feedbackRepository.getFeedbackByEmail(email);
    }
}
