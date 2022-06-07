export const greeting = () => {
    var greetings = ["Hi 👋🏾 ,", "Come in peace ☮️", "🕉️  Namaste,", "Salam Alaykum ☪️"]
    return greetings[Math.floor(Math.random() * greetings.length)]
}
