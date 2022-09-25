import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Homewidgets = styled.div``;
const Container = styled.div`
`;

const Home = () => {
    return (
        <Container>
            <Topbar />
            <Sidebar />
        </Container>
    )
}

export default Home
