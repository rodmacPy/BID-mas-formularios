export const Resultado = (props) => {
    const {FirstName, lastName, email, password, confirmPassword} = props.datos;
    return (
        <div className='resultado'>
            <h1>Your Form Date</h1>
            <p>First Name: {FirstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}
