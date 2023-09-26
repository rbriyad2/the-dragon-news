import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories]= useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/categories')
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