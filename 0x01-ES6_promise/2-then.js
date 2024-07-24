export default function handleResponseFromAPI(promise) {
  return promise
    .then((res) => ({ status: 200, body: 'success' }))
    .catch((err) => new Error())
    .finally(() => console.log('Got a response from the API'));
}