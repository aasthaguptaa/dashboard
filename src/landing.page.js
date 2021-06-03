import React from "react";
import auth from "./auth";


export const LandingPage = props => {
  return (
    <div>
        <h1>Login Page</h1>
            <div>    
                <label htmlFor="user">User ID</label>    
                <input type="text" name="user" placeholder="Enter User ID/Email ID"/>    
            </div>
            <div>    
                <label htmlFor="password">Password</label>    
                <input type="text" name="password" placeholder="Enter Password"/>  
            </div>  
      
            <button
                onClick={() => {
                auth.login(() => {
                    props.history.push("/app");
                });
                }}
            >
                Login
            </button>
    </div>
  );
};
