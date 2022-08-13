export const greeting = () => {
    var greetings = ["With Love and Harmony", "Come in peace!", "From me to you in all honesty.", "May peace be with you.", "The stars are your starting point!", "I hope this makes you feel somthing.", "Remember, I love you down to earth.", "I hope i've impacted something new."]
    return greetings[Math.floor(Math.random() * greetings.length)]
}
