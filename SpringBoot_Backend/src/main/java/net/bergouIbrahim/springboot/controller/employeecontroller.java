package net.bergouIbrahim.springboot.controller;


import lombok.RequiredArgsConstructor;
import net.bergouIbrahim.springboot.dao.employeedao;
import net.bergouIbrahim.springboot.model.employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class employeecontroller {

    @Autowired
    private employeedao empldao;

    @GetMapping("/employees")
    public List<employee> getAllemployees(){
        return empldao.findAll();
    }

    @PostMapping("save")
    public employee saveemployee(@RequestBody employee employee){
        return empldao.save(employee);
    }

    @GetMapping("/getemployee/{id_employee}")
    public ResponseEntity<employee>  getEmployee(@PathVariable("id_employee") Integer id){
        Optional<employee> employe=empldao.findById(id);
        if(employe.isPresent()){
            return ResponseEntity.ok(employe.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/delete/{id_employee}")
    public void deleteemployee(@PathVariable("id_employee") Integer id){
        empldao.deleteById(id);
    }


    @PutMapping("/update/{id}")
    public Optional<employee> updateemployee(@RequestBody employee empl,@PathVariable Integer id){
        Optional<employee> emp=empldao.findById(id);
        if(emp.isPresent()){
            emp.get().setFirstname(empl.getFirstname());
            emp.get().setLastname(empl.getLastname());
            emp.get().setEmail(empl.getEmail());
            employee saved=empldao.save(emp.get());
            return Optional.of(saved);
        }
        return Optional.empty();
    }



}
