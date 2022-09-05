import { useNavigate } from "react-router-dom";
import LoginForm from "../komponente/LoginForm";

function Login() {

    const users = [
        { username: 'goran', password: 'goran', email: 'goran@gmail.com' },
        { username: 'marko', password: 'marko', email: 'marko@gmail.com' },
        { username: 'nikola', password: 'nikola', email: 'nikola@gmail.com' }
    ];

    const navigate = useNavigate();

    function prijaviSe(username, password) {

        for (const user of users) {
            if (user.username == username && user.password == password) {
                alert('Login uspešan!')
                navigate('/knjige')
                return
            }
        }

        alert('Pogrešan username ili password!')

    }

    return (
        <div>
            <LoginForm prijaviSe={prijaviSe} />
        </div>
    )
}

export default Login;