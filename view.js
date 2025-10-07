function generateTr(todo) {
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

function onClickButton() {
  handleAddInfo()
}

function renderTbody(todos) {
  const elTbody = document.querySelector('tbody')
  elTbody.innerHTML = ''
  for (const todo of todos) {
    const elTr = generateTr(todo)
    elTbody.appendChild(elTr)
  }
}

const elButton = document.querySelector('button')
elButton.onclick = onClickButton
