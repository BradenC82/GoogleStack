import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'



export default class MyCard extends Component {


    componentDidMount(){
        console.log(this.props.order.items);
    }

    render() {
        return (
            <Card className="p-3" style={{ width: '258px', margin:'4px' }}>
                <blockquote className="blockquote mb-0 card-body">
                    <h4>Order 📝</h4>
        {this.props.order.items.map(item => {return (<p>{item}</p>)})}
                    
                    
                </blockquote>
            </Card>
        )
    }
}

