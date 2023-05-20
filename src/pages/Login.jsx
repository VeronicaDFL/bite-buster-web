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
            <p className="placeholder-glow ">
            <span className="placeholder col-10 rounded-3 ">Admin login name</span>
            </p>
            <h2>Password</h2>
            <p className="placeholder-glow ">
            <span className="placeholder col-10 rounded-3 ">Admin Password</span>
            </p>
            <button onClick="">Submit</button>
          </Col>
        </Row>
      </Container>

)
}











