# TaskMaster
Web-based application that tracks tasks or duties of projects.

Running template project:<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring Component:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Navigate to Server directory on command line. <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. type mvnw spring-boot: run<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. After server initializes, enter localhost:8080/<spring component url> in a browser to test.<br>
  Angular Components:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Navigate to Client directory on command line.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. enter npm install to update packages<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. enter ng serve<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. After server initializes, enter localhost:4200/<angular component url> in a browser to test<br>
  Build Entire project:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Navigate to the projects main directory on command line<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Enter mvnw clean package<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-this will build a runninable jar file with the angular components<br> 
         embedded into the spring components.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-JAVA_HOME environmental variable must be configured correctly<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. on the command line type java -jar <path>/taskmaster/server/target/taskmaster.jar<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Enter localhost:8080 to test<br>
  
If the user wants to interact with this and see the results:
  1. right click on the project in eclipse and go to the Local Terminal
  2. use the command: npm start 
  3. This will let you use the local site "localhost:4200" and will be able to use it freely without Spring
  
Interacting with Spring is different since Shane and I will have the Spring projects since were able to turn on/off the host itself. The user with only the angular project wont be able to see the results of interacting without the Spring project. I will see if I can post the project here later or not. Posting the commands just in case the Spring project is posted.

  1. Whenever finished with angular progress the user has to delete the "dist" folder
  2. right click on the project and go to the terminal 
  3. use the command: ng build --prod (This command basically syncs up all of the work done in the angular project into the Spring project since) they are connected in the back-end.
  4. right click on the Spring project and select Mavin -> Update Project
  5. right click on the Spring project and Run As -> Spring Boot App
