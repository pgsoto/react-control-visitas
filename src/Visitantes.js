import React, { Component } from 'react'
import axios from 'axios'
import Noty from 'noty'
import moment from 'moment'
import { Table, Modal, Form, Button } from 'react-bootstrap';

class Visitantes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            deptos: [],
            show: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount = () => {
        this.getListVisitantes()
        this.getListDepartamentos()
    }

    getListVisitantes = () => {
        axios.get('/visitante')
            .then((response) => {
                this.setState({ data: response.data.visitantes })
            })
            .catch(() => {

            })
            .finally(() => {

            })
    }

    getListDepartamentos = () => {
        axios.get('/departamento')
            .then((response) => {
                this.setState({ deptos: response.data.departamentos })
            })
            .catch(() => {

            })
            .finally(() => {

            })
    }

    handleInputChange = ({ currentTarget: { value, checked, name, type } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        const { state: { rut, nombre, departamento } } = this;
        e.preventDefault();

        let body = {
            rut: rut,
            nombre: nombre,
            departamento: departamento
        }

        axios.post('/visitante', body)
            .then((res) => {
                if (res.status === 201) {
                    new Noty({
                        type: 'success',
                        text: 'Registro completado',
                    }).show();
                    this.setState({ show: false })
                }
            })
            .catch(() => {
                new Noty({
                    type: 'error',
                    text: 'Ha ocurrido un error',
                }).show();
            })
            .finally(() => {
                this.getListVisitantes()
                this.getListDepartamentos()
            })
    };


    tabla = () => {
        return (
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Rut</th>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((x, k) => {
                            return (
                                <tr key={k}>
                                    <td>{x.rut}</td>
                                    <td>{x.nombre}</td>
                                    <td>{x.departamento}</td>
                                    <td>{moment(x.timestamp).format('DD-MM-YYYY HH:mm')}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    }

    modal = () => {
        const { state: { show } } = this;
        return (
            <Modal show={show} onHide={() => this.setState({ show: false })}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Visita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.formulario()}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.setState({ show: false })}>
                        Cerrar
          </Button>
                    <Button variant="primary" onClick={() => this.handleSubmit()}>
                        Guardar
          </Button>
                </Modal.Footer> */}
            </Modal>
        )
    }

    formulario = () => {
        const { handleSubmit, handleInputChange } = this;
        return (
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group controlId="form.rut">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control type="text" name="rut" placeholder="12345678-9" onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group controlId="form.nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group controlId="form.departamento">
                    <Form.Label>Departamento</Form.Label>
                    <Form.Control as="select" name="departamento" onChange={handleInputChange} required>
                        <option disabled selected >Seleccione...</option>
                        {
                            this.state.deptos.map((x, k) => {
                                return (
                                    <option key={k} value={x.numero}>{x.numero}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                    Guardar
          </Button>
            </Form>
        )
    }

    render() {
        return (
            <>
                <Button variant="primary" className="mb-2" onClick={() => this.setState({ show: true })}>Registrar</Button>
                {this.tabla()}
                {this.modal()}
            </>
        )
    }
}

export default Visitantes