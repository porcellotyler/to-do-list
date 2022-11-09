function toDoItem(title, dueDate, priority, description, list) {
    this.title = title
    this.dueDate = dueDate
    this.priority = priority
    this.description = description
    this.list = list
    this.id = ""
};

export { toDoItem };