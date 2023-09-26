import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories]= useState([]);
    useEffect(()=>{
fetch('https://the-dragon-news-server-3frrum7h7-rbriyad2gmailcoms-projects.vercel.app/categories')
.then(res => res.json())
.then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>Left Nav</h2>
            <div className="ps-4">
            {categories.map(category => <p key={category.id}> <Link to={`/category/${category.id}`} className='text-decoration-none fs-4 text-black'>{category.name}</Link> </p>)}
            </div>
        </div>
    );
};

export default LeftNav;<h2>Left Nav</h2>