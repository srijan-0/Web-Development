package com.example.prj;
import org.assertj.core.api.Assertions;
import com.example.prj.entity.Feedback;
import com.example.prj.repository.FeedbackRepository;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import org.springframework.test.annotation.Rollback;
import java.util.List;
import java.util.Optional;


@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class FeedbackRepositoryTest {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveFeedback() {
        Feedback feedback = new Feedback();
        feedback.setUserName("Nepali");
        feedback.setUserEmail("testing@gy");
        feedback.setUserFeedback("Good");
        feedback.setShow(true);
        feedbackRepository.save(feedback);

        Assertions.assertThat(feedback.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void findById(){
        Feedback feedback = feedbackRepository.findById(1).get();
        Assertions.assertThat(feedback.getId()).isEqualTo(1);
    }

    @Test
    @Order(3)
    public void findAllData(){
        List<Feedback> feedbackList= feedbackRepository.findAll();
        Assertions.assertThat(feedbackList.size()).isGreaterThan(0);
    }


    @Test
    @Order(4)
    public void updateItem(){
        Feedback feedback=feedbackRepository.findById(1).get();
        feedback.setUserFeedback("Bad");
        feedbackRepository.save(feedback);

        Assertions.assertThat(feedback.getUserFeedback()).isEqualTo("Bad");
    }


    @Test
    @Order(5)
    public void deleteById(){
        feedbackRepository.deleteById(1);

        Feedback feedback1=null;

        Optional<Feedback> feedback=feedbackRepository.findById(1);
        if(feedback.isPresent()){
            feedback1=feedback.get();
        }
        Assertions.assertThat(feedback1).isNull();
    }
}
