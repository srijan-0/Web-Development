package com.example.prj.service.impl;

import com.example.prj.entity.Contact;
import com.example.prj.pojo.ContactPojo;
import com.example.prj.repository.ContactRepository;
import com.example.prj.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    @Override
    public void saveFeedback(ContactPojo contactPojo) {

    }

    @Override
    public void saveContact(ContactPojo contactPojo) {

        Contact contact = new Contact();

        if(contactPojo.getId()!=null){
            contact=contactRepository.findById(contactPojo.getId())
                    .orElseThrow(()-> new NoSuchElementException("No data found"));
        }

        contact.setUserName(contactPojo.getUserName());
        contact.setUserPhone(contactPojo.getUserPhone());

        contact.setUserEmail(contactPojo.getUserEmail());

        contact.setUserAddress(contactPojo.getUserAddress());

        contact.setUserSubject(contactPojo.getUserSubject());

        contact.setUserMessage(contactPojo.getUserMessage());



        contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllData() {
        return contactRepository.findAll(); // select * from users
    }

    @Override
    public Optional<Contact> getById(Integer id) {
        return contactRepository.findById(id);
    }

    @Override
    public void deleteById(Integer id) {
        contactRepository.deleteById(id);
    }

    @Override
    public Optional<Contact> getFeedbackByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public Optional<Contact> getContactByEmail(String email) {
        return Optional.empty();
    }


    @Override
    public Optional<Contact> getByEmail(String email) {
        return Optional.empty();
    }

    @Override
    public Optional<Contact> getUserByEmail(String email) {
        return contactRepository.getContactByEmail(email);
    }
}
