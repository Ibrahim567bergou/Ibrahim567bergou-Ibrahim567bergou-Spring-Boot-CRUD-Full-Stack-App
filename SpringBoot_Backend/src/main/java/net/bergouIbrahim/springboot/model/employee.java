package net.bergouIbrahim.springboot.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Employee")
public class employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    @JsonProperty("id")
    private Integer id;

    @Column(name = "First_Name")
    @JsonProperty("firstname")
    private String firstname;

    @Column(name = "Last_Name")
    @JsonProperty("lastname")
    private String lastname;

    @Column(name = "Email")
    @JsonProperty("email")
    private String email;
}
