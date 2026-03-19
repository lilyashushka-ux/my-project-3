import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import Button from "./Button.jsx";




const Navbar = () => {
    return (
        <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <Nav />
        <Button size="sm">Contact me</Button>
        </header>
    );
}

export default Navbar;