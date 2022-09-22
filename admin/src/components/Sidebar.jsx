import styled from "styled-components";

import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`;

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`;

const Menu = styled.div`
    margin-bottom: 10px;
`;

const Title = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`;

const List = styled.ul`
    list-style: none;
    padding: 5px;
`;

const ListItemActive = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const Icon = styled.div`
    margin-right: 5px;
    font-size: 20px !important;
`;

const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <ListItemActive>
                            <LineStyle />
                            Home
                        </ListItemActive>
                        <ListItemActive>
                            <Timeline />
                            Analytics
                        </ListItemActive>
                        <ListItemActive>
                            <TrendingUp />
                            Sales
                        </ListItemActive>
                    </List>
                </Menu>
                <Menu>
                    <Title>QuickMenu</Title>
                    <List>
                        <ListItemActive>
                            <PermIdentity />
                            User
                        </ListItemActive>
                        <ListItemActive>
                            <Storefront />
                            Products
                        </ListItemActive>
                        <ListItemActive>
                            <AttachMoney />
                            Transactions
                        </ListItemActive>
                        <ListItemActive>
                            <BarChart />
                            Reports
                        </ListItemActive>
                    </List>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <List>
                        <ListItemActive>
                            <MailOutline />
                            Mail
                        </ListItemActive>
                        <ListItemActive>
                            <DynamicFeed />
                            Feedback
                        </ListItemActive>
                        <ListItemActive>
                            <ChatBubbleOutline />
                            Messages
                        </ListItemActive>
                    </List>
                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <ListItemActive>
                            <WorkOutline />
                            Manage
                        </ListItemActive>
                        <ListItemActive>
                            <Timeline />
                            Analytics
                        </ListItemActive>
                        <ListItemActive>
                            <Report />
                            Reports
                        </ListItemActive>
                    </List>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar
