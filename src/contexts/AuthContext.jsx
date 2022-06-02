import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [value, setValue] = useState("Log in");

    const [data, setData] = useState([]);

    const toggleAuth = (input) => {
        if(input === "Log in"){
            setValue("Log out");
        }else if(input === "Log out"){
            setValue("Log in")
        }
    }

    const isAuth = (value,condition) => {

    if(condition === "Log in"){
       fetch("https://reqres.in/api/users",{
           method:"POST",
           headers: { "content-type": "application/json" },
        body: JSON.stringify(value),
       })
       .then((res) => res.json())
       .then((res) => setData(res));
    }else if(condition === "Log out"){
        setData([]);
    }
       
    }


    return <AuthContext.Provider value={{value, isAuth, toggleAuth, data}}>{children}</AuthContext.Provider>
}