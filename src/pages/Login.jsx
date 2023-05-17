import { useNavigate } from "react-router-dom";
import { Container, Col, Row ,Button} from "react-bootstrap";



export default function Login() {
    const navigate = useNavigate();

    return(
        // <>
        //<h2>login</h2>
        //<button onClick="">Submit</button>
        //</>
        <Container>
        <Row>
          <Col className='mx-4 p-4 rounded-3 login-container'>
            <h2>Login</h2>
            <p class="placeholder-glow ">
            <span class="placeholder col-10 "></span>
            </p>
            <Button onClick="">Submit</Button>
          </Col>
        </Row>
      </Container>

)
}











