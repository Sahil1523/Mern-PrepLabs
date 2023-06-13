import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";


function AllRoutes(){
    return(
        <Routes>
            <Route
            path="/"
            element={
                <SearchProvider>
                <Homepage/>
              </SearchProvider>
            }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
 
        </Routes>
    )
}