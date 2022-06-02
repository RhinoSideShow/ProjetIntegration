export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim){
        errors.username = "Username required"
    }

    if (!values.email) {
        errors.emai = "Email required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Email address is invalid"
        }}

    if (!values.password){
        errors.password= 'Password is require'
    }else if (values.password.length < 6){
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.password2){
        errors.password2 = 'Password is required'
    } else if (values.password2 !== values.password){
        errors.password2 = 'Passwords do not match'
}
    return errors;