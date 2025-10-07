async function handleAddInfo() {
  const newTodos = await sendRequest()
  setTodos(newTodos)
  renderTbody(todos)
}
