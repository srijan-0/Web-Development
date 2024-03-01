package com.example.prj.repository;

import com.example.prj.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Integer> {
    @Query(value = "select * from contact where email=?1", nativeQuery = true)
    Optional<Contact> getContactByEmail(String email);


}


