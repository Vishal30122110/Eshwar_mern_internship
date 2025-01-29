import React, { useState } from 'react';
import { Image } from './image'; 
export const Password = () => {
    const staticPass = "abcdefg";
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const passwordCheck = () => {
        const password = prompt("Enter the password:");
        if (password === staticPass) {
            setIsLoggedIn(true); 
        } else {
            alert("Access denied"); 
        }
    };

    return (
        <div>
            {isLoggedIn ? ( 
                <Image />
            ) : (
                <button onClick={passwordCheck}>Enter Password</button>
            )}
        </div>
    );
};
