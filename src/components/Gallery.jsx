import React, { Component } from 'react'
import Masonry from 'react-masonry-component';
import MyCard from './MyCard'



export default class Gallery extends Component {

    render() {
        return (
            <Masonry options={{"isFitWidth": true}} style={{margin:'0 auto'}}>
                {this.props.orders.map(order => (
                    <MyCard key={order.id} order={order}></MyCard>
                ))}
            </Masonry>
        )
    }
}

const cardStyle = {
    width:'100px',
    border:'1px solid black'
}

