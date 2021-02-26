import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { Link }from 'react-router-dom';
import '../../App.css'

const Chaptercard = (props) => {
    return (
        <div className="container cardp">
            <CardDeck>
            <Card className="cardbox">
               <Link to={props.path1}>
               <Card.Img variant="top" src={props.img1} />
               </Link>
            </Card>
            <Card className="cardbox">
            <Link to={props.path2}>
               <Card.Img variant="top" src={props.img2} />
               </Link>
            </Card>
            <Card className="cardbox">
            <Link to={props.path3}>
               <Card.Img variant="top" src={props.img3} />
               </Link>
            </Card>
            </CardDeck>
        </div>
    )
}

export default Chaptercard;
