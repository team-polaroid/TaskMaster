package org.polaroid.taskmaster.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.polaroid.taskmaster.model.Task;
import org.polaroid.taskmaster.repository.TaskRepository;
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
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public List<Task> getAllTasks(){
        System.out.println("Get all Tasks...");

        List<Task> taskList = new ArrayList<>();
        taskRepository.findAll().forEach(taskList::add);
        return taskList;
    }

    @PostMapping(path="/tasks/create")
    public Task postTask(@RequestBody Task task){
        Task t = new Task();
        t.setName(task.getName());
        t.setDescription(task.getDescription());
        taskRepository.save(t);
        return t;
    }

    @DeleteMapping("/tasks/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") long id) {
        System.out.println("Delete Task with ID = " + id + "...");

        taskRepository.deleteById(id);

        return new ResponseEntity<>("Task has been deleted!", HttpStatus.OK);
    }


    @DeleteMapping("/tasks/delete")
    public ResponseEntity<String> deleteAllTasks() {
        System.out.println("Delete All Tasks...");

        taskRepository.deleteAll();

        return new ResponseEntity<>("All tasks have been deleted!", HttpStatus.OK);
    }

    @GetMapping(value = "tasks/name/{name}")
    public List<Task> findByName(@PathVariable String name) {
        List<Task> tasks = taskRepository.findByName(name);
        return tasks;
    }

    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") long id, @RequestBody Task task) {
        System.out.println("Update Task with ID = " + id + "...");

        Optional<Task> taskData = taskRepository.findById(id);

        if (taskData.isPresent()) {
            Task t = taskData.get();
            t.setName(t.getName());
            t.setDescription(t.getDescription());
            return new ResponseEntity<>(taskRepository.save(t), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
