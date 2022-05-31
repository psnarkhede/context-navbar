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
            setData([]);
        }
    }

    const isAuth = (value) => {

        if(value === "Log in"){
       fetch("https://reqres.in/api/users?page=2")
       .then((res) => res.json())
       .then((res) => setData(res.data[0]));
        }
    }


    return <AuthContext.Provider value={{value, isAuth, toggleAuth, data}}>{children}</AuthContext.Provider>
}