package com.example.prj.repository;

import com.example.prj.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {
    @Query(value = "select * from feedback where email=?1", nativeQuery = true)
    Optional<Feedback> getFeedbackByEmail(String email);

    @Query("UPDATE Feedback f SET f.show = true WHERE f.id = ?1")
    void showFeed(int id);

    @Query("UPDATE Feedback f SET f.show = false WHERE f.id = ?1")
    void hideFeed(int id);

}


