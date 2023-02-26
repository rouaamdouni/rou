import favicon from "../assets/favicon.png";

const Header = () => {
return(
    <div className="bg-blue-300 h-12 box-border p-4 ">
        <div className="flex justify-center">   
             <img src={favicon} alt="logo" className="w-[30px] h-[25px] mx-auto   "  />
        </div>

    </div>
)
}
export default Header;