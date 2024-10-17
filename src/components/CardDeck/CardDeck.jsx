import React from "react";
import { Link } from "react-router-dom";
import "./CardDeck.css";

// Import boostrap
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const CardDeck = ({ cardInfo }) => {
  return (
    <CardGroup>
      {cardInfo.map((card, index) => (
        <Card key={index} style={{padding: "10px"}}>
          <Card.Img variant="top" src={card.image} alt={card.title} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link className="btn card-deck-link" to={card.link} title={`Go to ${card.title} page`}>
              READ MORE
            </Link>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
};
