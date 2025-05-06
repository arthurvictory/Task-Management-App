import { Col, Container } from "react-bootstrap";
import LoginButton from "../Auth0/LoginButton";
import LogoutButton from "../Auth0/LogoutButton";

const HomePage: React.FC = () => {
    return (
        <Container>
            <Col>
                <h1>Hello Auth0 World</h1>
                <LoginButton />
                <LogoutButton />
            </Col>
        </Container>
    )
};

export default HomePage;