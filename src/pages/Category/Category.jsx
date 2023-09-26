import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const {id}= useParams()
    const CategoryNews = useLoaderData()
    return (
        <div>
            {id && <h2>This CateGory News {CategoryNews.length}</h2>}
            {CategoryNews.map(news=> <NewsCard key={news._id} news={news}></NewsCard>)}
        </div>
    );
};

export default Category;<h2>Category !!!!!!</h2>