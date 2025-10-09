async function handleGetTodos() {
  const newTodos = await getTodos()
  setTodos(newTodos)
  saveTodos(todos)
  renderTBodyTodos(todos)
}
