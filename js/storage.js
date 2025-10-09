function saveTodos(todos) {
  const stringifiedTodos = JSON.stringify(todos)
  localStorage.setItem('todos', stringifiedTodos)
}
