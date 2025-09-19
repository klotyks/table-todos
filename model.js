const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
const text = await response.text()

const parsedText = JSON.parse(text)
parsedText

function generateTr(object) {
  for (const prop in object) {
    const elTd = document.createElement('td')
    elTd.textContent = object[prop]
  }
}
