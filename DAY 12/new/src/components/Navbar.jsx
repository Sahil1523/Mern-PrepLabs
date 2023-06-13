import React, { useContext } from 'react'
import  SearchContext  from "../searchContext";
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const {search, updateSearch}=useContext(SearchContext);
    const handleChange = e => {
        updateSearch(e.target.value);
      };
      //const handleSignin = () =>{
       //   Navigate("/signin");
      //};

      const handleSignup = () =>{
        Navigate("/signup");
          };
  return (
    <div>
        <input type="text"
        placeholder='search..'
        value={search}
        onChange={(e)=> handleChange(e)} />

        <Link href="/pages/signin">
        <button>Sign IN</button>
        </Link>
        
        <button onClick={handleSignup}>Sign UP</button>

    </div>
  )
}
