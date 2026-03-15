import { CiBarcode } from "react-icons/ci";


const Logo = () =>{
return(
  <a href="#" className="text-xl font-bold tracking-tight hover:text-blue-600" >
            <CiBarcode size={36} className="inline mr-1" />
            Alex Carter
        </a>
);
};

export default Logo