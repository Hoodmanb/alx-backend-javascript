export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        let success = true
        if (success) {
            resolve(success)
        } else {
            reject(new Error('Operation Failed'))
        }
    })
}