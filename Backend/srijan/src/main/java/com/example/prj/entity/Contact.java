package com.example.prj.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="contact")
public class Contact {
    @Id
    @SequenceGenerator(name = "contact_seq_gen", sequenceName = "contact_id_seq",allocationSize = 1)
    @GeneratedValue(generator="contact_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name="user_Name", nullable = false, length = 255)
    private String userName;

    @Column(name="user_Phone", nullable = false, length = 255)
    private String userPhone;

    @Column(name="user_Email", nullable = false, length = 255)
    private String userEmail;

    @Column(name="user_Address", nullable = false, length = 255)
    private String userAddress;

    @Column(name="user_Subject", nullable = false, length=255)
    private String userSubject;

    @Column(name="user_Message", nullable = false, length=255)
    private String userMessage;

}
