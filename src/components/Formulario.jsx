export const Formulario = (props) => {
    const { entrada, setEntrada } = props;

    const cambiar = (e) => {
        setEntrada(
            {
                ...entrada,
                [e.target.name]: e.target.value
            }
        )
    }
    const alerta = (e, param) => {
        switch (param) {
            case "email":
                return (
                    (e.length == 0) ? "" :
                        (e.length <= 5) ? "El campo debe tener al menos 5 caracteres" : ""
                );
            case "password":
                return (
                    (e.length == 0) ? "" :
                        (e.length <= 8) ? "El campo debe tener al menos 8 caracteres" : ""
                );
            default:
                return (
                    (e.length == 0) ? "" :
                        (e.length <= 2) ? "El campo debe tener al menos 2 caracteres" : ""
                );
        }
    }
    const validarPass = () => {
        (entrada.confirmPassword.length == 0) ? "" :
            (entrada.confirmPassword !== entrada.password) ? <p>La contraseña es diferente</p> : ""

    }
    return (
        <form>
            <div>
                <label htmlFor="FirstName">First Name</label>
                <input onChange={cambiar} type="text" name="FirstName" />
            </div>
            {alerta(entrada.FirstName)}

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={cambiar} type="text" name="lastName" />
            </div>
            {alerta(entrada.lastName)}
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={cambiar} type="text" name="email" />
            </div>
            {alerta(entrada.email, 'email')}
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={cambiar} type="password" name="password" />
            </div>
            {alerta(entrada.password, 'password')}
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={cambiar} type="text" name="confirmPassword" />
            </div>
            {validarPass()}
        </form>
    )
}
