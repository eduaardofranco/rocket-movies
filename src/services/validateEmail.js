export function validateEmail({email, setEmailIsValid}) {
    //email regex
    const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(email.match(mailformat)) {
        setEmailIsValid(true)
    } else {
        setEmailIsValid(false)   
    }
}