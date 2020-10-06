export default function swDev() {
    let sw = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(sw).then(result => {
        console.log("Registered service worker:", result)
    })
}