#!/usr/bin/node
const request = require('request');

// Function to compute the number of completed tasks by user id
function computeCompletedTasks(apiUrl) {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Invalid response:', response.statusCode);
    } else {
      const tasks = JSON.parse(body);

      // Create an object to store the count of completed tasks for each user id
      const completedTasksByUser = {};

      // Loop through the tasks and count the completed tasks for each user
      tasks.forEach((task) => {
        if (task.completed) {
          if (completedTasksByUser.hasOwnProperty(task.userId)) {
            completedTasksByUser[task.userId]++;
          } else {
            completedTasksByUser[task.userId] = 1;
          }
        }
      });

      // Print the result
      console.log(completedTasksByUser);
    }
  });
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Call the function with the provided API URL
computeCompletedTasks(apiUrl);
