export default function handleResponseFromAPI (promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Get a response from the API'));
}
