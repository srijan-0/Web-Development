package com.example.prj.pojo;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContactPojo {

    private Integer id;

    @NotNull(message = "Full name is required")
    private String userName;

    @NotNull
    private String userPhone;


    @NotNull
    private String userEmail;

    @NotNull
    private String userAddress;

    @NotNull
    private String userSubject;

    @NotNull
    private String userMessage;



}
