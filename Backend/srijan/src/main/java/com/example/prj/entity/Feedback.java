package com.example.prj.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="feedback")
public class Feedback {
    @Id
    @SequenceGenerator(name = "feedback_seq_gen", sequenceName = "feedback_id_seq",allocationSize = 1)
    @GeneratedValue(generator="feedback_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name="user_Name", nullable = false, length = 255)
    private String userName;

    @Column(name="user_Email", nullable = false, length = 255)
    private String userEmail;

    @Column(name="user_Feedback", nullable = false, length=255)
    private String userFeedback;

    @Column(name="show")
    private boolean show = false;

}
