import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        var exUser = localStorage.getItem("userEmail");
        console.log(userLoggedIn, exUser)
        if(exUser) setUserLoggedIn(true)


        if (!userLoggedIn) navigate('/login') 
        else navigate('/home')
    }, [navigate, userLoggedIn]);
}