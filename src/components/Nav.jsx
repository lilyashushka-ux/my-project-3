import { href } from "react-router-dom";

const navLinks = [
{href: '#about', label:'About'},
{href: '#projects', label:'Projects'},
{href: '#expirience', label:'Expirience'},
{href: '#testimonials', label:'Testimonials'},
];

const Nav = () =>{
    return(
   <nav className=" flex gap-1 p-1 rounded-full border border-white/15 bg-surface/10 backdrop-blur"> 
    {navLinks.map((link,index)=>(<a className="px-4 py-2 rounded-full text-sm text-nav hover:text-foreground hover:bg-gray-700" href={link.href}>{link.label}</a>))}
    
   </nav>
    );
};

export default Nav