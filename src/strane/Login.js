import LoginForm from "../komponente/LoginForm";

function Login() {

    const users = [
        { username: 'goran', password: 'goran', email: 'goran@gmail.com' },
        { username: 'marko', password: 'marko', email: 'marko@gmail.com' },
        { username: 'nikola', password: 'nikola', email: 'nikola@gmail.com' }
    ];

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login;