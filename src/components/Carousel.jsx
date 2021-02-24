import React from 'react';
import Shinobu from '../resources/Shinobu.jpg';
import Keqing from '../resources/Keqing.jpg';
import AWP from '../resources/AWP.jpg';
import unknown from '../resources/unknown.png';

import { Container, Row } from 'react-bootstrap';


import Card from '../components/Card';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Youtube',
                    subTitle: 'Youtube home page',
                    imgSrc: Shinobu,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Youtube2',
                    subTitle: 'Youtube home page2',
                    imgSrc: unknown,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Youtube3',
                    subTitle: 'Youtube home page3',
                    imgSrc: Keqing,
                    link: 'https://youtube.com',
                    selected: false
                },

            ]
        }
    }

    handleCardClick = (id) => {
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({items});
    }

    makeCards = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }
    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeCards(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;