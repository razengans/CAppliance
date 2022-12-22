import React from 'react';
import MyButton from "../buttons/MyButton";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img className="logo" src="https://psv4.userapi.com/c237031/u133786441/docs/d5/c6875588794a/image0.jpg?extra=Bu08HzifdfewzKS-9nrjQAThBXkzqSX1fCYpySvjpl8AwRxA3z27EXaeG5ckcga3DgjbCoTHajIvdcb3BJvesimVjGiYX43eWQdFJJR4cvOc1R0aWpEgrHQoyMHMfJEDhf6HYPThTAwNdpHktT2sBUlK328" alt="логотип"/>
            </div>
            <div className="navbar__name">
                CAppliance
            </div>
            <div className="navbar__links">
                <MyButton onClick="" >Home page</MyButton>
                <MyButton onClick="" >Sing in</MyButton>
                <MyButton onClick="" >Sing out</MyButton>
            </div>
        </div>
    );
};

export default Navbar;