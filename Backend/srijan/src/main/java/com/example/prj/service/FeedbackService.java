package com.example.prj.service;

import com.example.prj.entity.Feedback;
import com.example.prj.pojo.FeedbackPojo;

import java.util.List;
import java.util.Optional;

public interface FeedbackService {

    void saveFeedback(FeedbackPojo feedbackPojo);

    List<Feedback> getAllData();

    Optional<Feedback> getById(Integer id);

    void deleteById(Integer id);

    Optional<Boolean> showFeed(Integer id);

    Optional<Boolean> hideFeed(Integer id);

    Optional<Feedback> getFeedbackByEmail(String email);

    Optional<Feedback> getByEmail(String email);

    Optional<Feedback> getUserByEmail(String email);
}
