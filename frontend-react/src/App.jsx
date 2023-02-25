import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Button variant="primary"><i class="fas fa-moon fa-lg fa-fw"></i></Button>{' '}

          </Nav>
        </Container>
      </Navbar>
      <h1 className="text-center">Todo List </h1>
      <div style={{
    display: "flex",
    alignItems : "center",
    justifyContent :"center"
}}> 



      <InputGroup style={{width:"300px"}} className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-success" id="button-addon2">
        <i class="fa fa-add"></i>
        </Button>
      </InputGroup>
      </div>
      <div className="mt-4">
                <Nav justify variant="tabs" defaultActiveKey="?list=BLIND75">
                    <Nav.Item >
                        <Nav.Link eventKey="?list=BLIND75">
                            <span className="tab-font">Todos</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-1">
                            <span className="tab-font">Completed</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            <span className="tab-font">Deleted</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
    </div>
  )
}

export default App