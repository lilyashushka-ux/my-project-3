import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";




const Navbar = () => {
    return (
        <header className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <Nav />
        <div>Button</div>
        </header>
    );
}

export default Navbar;