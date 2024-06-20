const taskManager = {
  tasks: [],

  addTask(title, priority) {
    const newTask = {
      title,
      id: this.tasks.length + 1,
      priority,
    };
    this.tasks.push(newTask);
  },

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  updateTask(id, { title, priority }) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      Object.assign(this.tasks[taskIndex], { title, priority });
    }
  },

  sortTasks(type = 'id', order = 'asc') {
    if (type === 'id') {
      if (order === 'asc') {
        this.tasks.sort((a, b) => a.id - b.id);
      } else {
        this.tasks.sort((a, b) => b.id - a.id);
      }
    } else if (type === 'priority') {
      if (order === 'asc') {
        this.tasks.sort((a, b) => a.priority - b.priority);
      } else {
        this.tasks.sort((a, b) => b.priority - a.priority);
      }
    }
  },
};


taskManager.addTask('Помыть посуду', 1);
taskManager.addTask('Помыть посуду', 3);
taskManager.addTask('Протереть посуду', 2);
console.log(taskManager.tasks);

taskManager.removeTask(1);
console.log(taskManager.tasks);

taskManager.updateTask(2, { title: 'Помыть посуду', priority: 3 });
console.log(taskManager.tasks);

taskManager.sortTasks('priority', 'asc');
console.log(taskManager.tasks);

taskManager.sortTasks('id', 'desc');
console.log(taskManager.tasks);

taskManager.sortTasks();
console.log(taskManager.tasks);