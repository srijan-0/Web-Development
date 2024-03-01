package com.example.prj.Controller;

import com.example.prj.entity.Contact;
import com.example.prj.pojo.ContactPojo;
import jakarta.validation.Valid;
import com.example.prj.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/Contact")
@RestController
@RequiredArgsConstructor

public class ContactController {

    private final ContactService contactService;

    @PostMapping("/save")
    public String saveContact( @RequestBody ContactPojo contactPojo){
        contactService.saveContact(contactPojo);
        return "data created successfully";
    }

    @GetMapping("/getAll")
    public List<Contact> getAllData(){
        return contactService.getAllData();
    }

    @GetMapping("/getById/{id}")
    public Optional<Contact> getDataBtId(@PathVariable("id") Integer id){
        return contactService.getById(id);
    }

    @DeleteMapping("/deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        contactService.deleteById(id);
    }


}
