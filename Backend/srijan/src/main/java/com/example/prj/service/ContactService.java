package com.example.prj.service;

import com.example.prj.entity.Contact;
import com.example.prj.pojo.ContactPojo;

import java.util.List;
import java.util.Optional;

public interface ContactService {

    void saveFeedback(ContactPojo contactPojo);

    void saveContact(ContactPojo contactPojo);

    List<Contact> getAllData();

    Optional<Contact> getById(Integer id);

    void deleteById(Integer id);


    Optional<Contact> getFeedbackByEmail(String email);

    Optional<Contact> getContactByEmail(String email);

    Optional<Contact> getByEmail(String email);

    Optional<Contact> getUserByEmail(String email);
}
