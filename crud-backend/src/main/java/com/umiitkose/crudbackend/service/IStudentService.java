package com.umiitkose.crudbackend.service;

import com.umiitkose.crudbackend.model.Student;

import java.util.List;

public interface IStudentService {
    Student addStudent(Student student);

    List<Student> getAllStudent();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);


}
