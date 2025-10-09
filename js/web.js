async function sendRequest() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const text = await response.text()
  const parsedText = JSON.parse(text)
  return parsedText
}
