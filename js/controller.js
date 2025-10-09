async function handleGetTodos() {
  const newTodos = await sendRequest()
  setTodos(newTodos)
  saveTodos(todos)
  renderTBodyTodos(todos)
}
