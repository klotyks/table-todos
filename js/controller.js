async function handleGetTodos() {
  const newTodos = await sendRequest()
  setTodos(newTodos)
  renderTbody(todos)
}
