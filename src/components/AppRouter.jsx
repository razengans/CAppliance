import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<PostIdPages/>}/>
            <Route path="/*" element={<Navigate to="/" replace />} />)
        </Routes>
    );
};

export default AppRouter;