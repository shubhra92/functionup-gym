import "./Navbar.css"
import Pages from "./components/Pages"
import RegisterButton from "./components/RegisterButton"

const Navbar = ()=>{
    return (
        <div className="main">
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-logo-template-design-04d583c8ca3558ea0ea21763a57e7ba6_screen.jpg?ts=1604496976"
            alt="" className="logo" />
            <Pages />
            <RegisterButton />

        </div>
    )
}


export default Navbar