package org.polaroid.taskmaster.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.polaroid.taskmaster.model.Project;
import org.polaroid.taskmaster.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/api")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getAllTasks(){
        System.out.println("Get all Projects...");

        List<Project> projectList = new ArrayList<>();
        projectRepository.findAll().forEach(projectList::add);
        return projectList;
    }

}
