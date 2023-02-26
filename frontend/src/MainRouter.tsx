import React ,{useContext,useState} from "react";
import {Routes,Route} from "react-router-dom";
import userContext from "./contexts/userContext";
import {SignIn,SignUp,Home} from "./pages/index "
const MainRouter = () => {
    const [user,setUser] = useState(null);
    // const [isAuth,setIsAuth] = useState(false);
    // const [isLogin,setIsLogin] = useState(false);
    // const [isRegister,setIsRegister] = useState(false);
    // const [isForgotPassword,setIsForgotPassword] = useState(false);
    // const [isResetPassword,setIsResetPassword] = useState(false);
    // const [isUpdateProfile,setIsUpdateProfile] = useState(false);
    // const [isDeleteAccount,setIsDeleteAccount] = useState(false);
    // const [isLogout,setIsLogout] = useState(false);
    // const [isChangePassword,setIsChangePassword] = useState(false);
    // const [isChangeEmail,setIsChangeEmail] = useState(false);
    // const [isChangePhone,setIsChangePhone] = useState(false);
    // const [isChangeAddress,setIsChangeAddress] = useState(false);
    return (
        <userContext.Provider value={{user,setUser}}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
        </userContext.Provider>
    )
}
export default MainRouter;