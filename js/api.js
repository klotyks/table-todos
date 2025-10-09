async function sendRequest(url) {
  const response = await fetch('https://jsonplaceholder.typicode.com/' + url)
  const text = await response.text()
  return JSON.parse(text)
}

async function getTodos() {
  return await sendRequest('todos')
}
