export default function handleResponseFromAPI(promise) {
  promise
    .then((result) => ({ status: 200, body:'success' }))
    .catch((error) => new Error(error))
    .finally(console.log('Got a response from the API'));
}