import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { CardDeck, Card } from 'react-bootstrap';
import '../../App.css'

const Audiocard = (props) => {
    return (
        <div className="container cardp">
            <CardDeck>
            <Card className="cardbox">
                <Card.Img variant="top" src={props.img1} />
                <Card.Body>
                <Card.Title><strong>{props.title1}</strong></Card.Title>
                <Card.Text>
                    {props.shlok1}
                </Card.Text>
                </Card.Body>
                <div className="center">
                    <ReactAudioPlayer
                        src={props.audio1}
                        controls
                    /> 
                </div>
            </Card>
            <Card className="cardbox">
                <Card.Img variant="top" src={props.img2} />
                <Card.Body>
                <Card.Title><strong>{props.title2}</strong></Card.Title>
                <Card.Text>
                    {props.shlok2}
                </Card.Text>
                </Card.Body>
                <div className="center">
                    <ReactAudioPlayer
                        src={props.audio2}
                        controls
                    /> 
                </div> 
            </Card>
            <Card className="cardbox">
                <Card.Img variant="top" src={props.img3} />
                <Card.Body>
                <Card.Title><strong>{props.title3}</strong></Card.Title>
                <Card.Text>
                    {props.shlok3}
                </Card.Text>
                </Card.Body>    
                <div className="center">
                    <ReactAudioPlayer
                        src={props.audio3}
                        controls
                    /> 
                </div>  
            </Card>
            </CardDeck>
        </div>
    )
}

export default Audiocard
