import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './EditorsInsights/EditorsInsights';

const News = () => {
    const fullnews = useLoaderData()
    const {title, _id, author, rating, image_url, total_view, details, category_id}=fullnews
    return (
        <Container>
            <Card className='w-full'>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="primary"> All news in this category</Button></Link>
        
      </Card.Body>
    </Card>

    <EditorsInsights></EditorsInsights>
        </Container>
    );
};

export default News;