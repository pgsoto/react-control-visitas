import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Visitantes from './Visitantes'

class Inicio extends Component {
    render() {
        return (
            <>
                <Container>
                    <h1>Control de Visitas</h1>
                    <Visitantes />
                </Container>
            </>
        )
    }
}

export default Inicio