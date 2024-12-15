package net.bergouIbrahim.springboot.dao;

import net.bergouIbrahim.springboot.model.employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface employeedao extends JpaRepository<employee,Integer> {

    public employee getById(Integer id);

}
