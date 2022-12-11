import {createContext, useState} from "react";


export const NavContext = createContext(null)
export default function NavContextProvider ({children}){

    const {navState,setNavState} = useState(false)

    return(
        <NavContext.Provider value={[navState,setNavState]}>
            {children}
        </NavContext.Provider>
    )
}