export function hey(message: string): string {
    const question = '?'
    message = message.trim()
    // He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
    if (/[A-Z]/.test(message) && message === message.toUpperCase() && message.endsWith(question)) {
        return ("Calm down, I know what I'm doing!")
    }

    //     Bob answers 'Sure.' if you ask him a question, such as "How are you?".
    if (message.endsWith(question)) {
        return ("Sure.")
    }

    // He says 'Fine. Be that way!' if you address him without actually saying anything.
    if (message === "") {
        return ("Fine. Be that way!")
    }
    // He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
    if (/[A-Z]/.test(message) && message === message.toUpperCase() && !message.endsWith(question)) {
        return ("Whoa, chill out!")
    }

    // He answers 'Whatever.' to anything else.

    else {
        return ("Whatever.")
    }

}
