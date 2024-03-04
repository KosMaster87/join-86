/**
 * Format the nearest date in en-US.
 * @param {nearest date} date
 */
function getTasksonDate(date) {
  let upcomingTasksEle = document.getElementById("summery-upcoming-tasks");
  let arr = currentUser.tasks;
  const options = { year: "numeric", month: "long", day: "numeric" };
  let dateToString = new Date(date).toLocaleDateString("en-US", options);
  let tasksForDay = [];
  arr.forEach((task) => {
    let taskDate = new Date(task.dueDate).toLocaleDateString("en-US", options);
    if (taskDate.match(dateToString)) {
      tasksForDay.push(task);
    }
  });
  upcomingTasksEle.innerHTML = tasksForDay.length;
}