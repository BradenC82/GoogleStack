import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'

import Gallery from './Gallery'



export default class Dashboard extends Component {

    render() {
        return (
            <Container style={containerStyle}>

                <Gallery orders={this.props.orders} showSnackbar={this.props.showSnackbar}></Gallery>

            </Container>
        )
    }

}

const containerStyle={
    paddingTop:'56px'
}
