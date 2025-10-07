// генерируем оформление для тудушки
function generateTrTodo(todo) {
  const elTr = document.createElement('tr')
  const elTd1 = document.createElement('td')
  const elTd2 = document.createElement('td')
  const elTd3 = document.createElement('td')
  const elTd4 = document.createElement('td')
  elTd1.textContent = todo.userId
  elTd2.textContent = todo.id
  elTd3.textContent = todo.title
  elTd4.textContent = todo.completed
  elTr.appendChild(elTd1)
  elTr.appendChild(elTd2)
  elTr.appendChild(elTd3)
  elTr.appendChild(elTd4)
  return elTr
}

function onClickButtonGetTodos() {
  handleGetTodos()
}

function renderTbody(todos) {
  const elTbody = document.querySelector('tbody')
  elTbody.innerHTML = ''
  todos.forEach(todo => elTbody.appendChild(generateTrTodo(todo)))
}

elButtonGetTodos.onclick = onClickButtonGetTodos
