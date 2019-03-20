package org.polaroid.taskmaster.repository;

import java.util.List;
import org.polaroid.taskmaster.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface ProjectRepository extends JpaRepository<Project, Long>{
}
