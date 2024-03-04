function howManyTasks() {
  const taskStatusCounts = {
    "to-do": 0,
    done: 0,
    progress: 0,
    await: 0,
  };

  // Zähle die Aufgaben nach ihrem Status
  user.tasks.forEach((task) => {
    taskStatusCounts[task.status]++;
  });

  // Aktualisiere die HTML-Elemente mit den jeweiligen Zählungen
  Object.keys(taskStatusCounts).forEach((status) => {
    const containerId = `summery${
      status.charAt(0).toUpperCase() + status.slice(1)
    }Todos`;
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = taskStatusCounts[status];
    }
  });

  // Zeige die Gesamtanzahl der Aufgaben an
  const counterContainer = document.getElementById("dataTodos");
  if (counterContainer) {
    counterContainer.innerHTML = user.tasks.length;
  }
}
