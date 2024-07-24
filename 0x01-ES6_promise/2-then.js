// export default function handleResponseFromAPI(promise) {
//     return new Promise((resolve, reject) => {
        
//     })
// }

export default function handleResponseFromAPI(promise) {
    promise
    .then((result) return { status: 200 body: success });
    .then((error) return new Error({});
    .finally(() console.log('Got a response from the API'))
}