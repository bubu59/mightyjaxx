import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`

`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`;


const Right = styled.div`
    display: flex;
    align-items: center;
`;

const Iconcontainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`;

const Iconbadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>jaxxadmin</Logo>
                </Left>
                <Right>
                    <Iconcontainer>
                        <NotificationsNone />
                        <Iconbadge>2</Iconbadge>
                    </Iconcontainer>
                    <Iconcontainer>
                        <Language />
                        <Iconbadge>2</Iconbadge>
                    </Iconcontainer>
                    <Iconcontainer>
                        <Settings />
                    </Iconcontainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar
