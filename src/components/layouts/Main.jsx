// components
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Main = ({children}) => {
    return (
        <>
        <Header/>
            {children}
         <Footer/>   
        </>
    )
}