import Logo from "../components/Logo.jsx";
import Nav from "../components/Nav.jsx";
import Button from "../components/Button.jsx";




const Navbar = () => {
    return (
        <header className="container w-full mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <Nav />
        <Button size="sm">Contact me</Button>
        </header>
    );
}

export default Navbar;