import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { title, _id, author, rating, image_url, total_view, details } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <div className="d-flex align-items-center flex-grow-1">
            <Image style={{ height: 40 }} src={author?.img} roundedCircle />
            <div className="author ps-2">
              <p>{author?.name}</p>
              <p>
                <small>
                  {moment(author?.published_date).format("D-MMM-YYYY")}
                </small>
              </p>
            </div>
          </div>
          <div className="shareBook">
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {" "}
            {details.length < 250 ? (
              <> {details}</>
            ) : (
              <>{details.slice(0, 250)}</>
            )}
            ... <Link to={`/news/${_id}`}>Read More</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="ratings flex-grow-1">
            <Rating
              placeholderRating={rating?.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <span>{rating?.number}</span>
          </div>
          <div className="views d-flex align-items-center">
            <FaEye></FaEye>
            <div className="ps-2">
            {total_view}   
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
