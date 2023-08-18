package com.umiitkose.crudbackend.service;

import com.umiitkose.crudbackend.exception.StudentAlreadyExistException;
import com.umiitkose.crudbackend.exception.StudentNotFoundException;
import com.umiitkose.crudbackend.model.Student;
import com.umiitkose.crudbackend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {

    private final StudentRepository studentRepository;

    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())) {
            throw new StudentAlreadyExistException(student.getEmail() + " already exists!");
        }

        return studentRepository.save(student);
    }


    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(student1 -> {
            student1.setFirstName(student.getFirstName());
            student1.setLastName(student.getLastName());
            student1.setEmail(student.getEmail());
            student1.setDepartment(student.getDepartment());
            return studentRepository.save(student1);
        }).orElseThrow(() -> new StudentNotFoundException("this student could not be found."));
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new StudentNotFoundException("Student not found with the id : " + id));
    }

    @Override
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id))
            throw new StudentNotFoundException("Student not found with the id ");

        studentRepository.delete(studentRepository.findById(id).orElseThrow());
    }


    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }

}
