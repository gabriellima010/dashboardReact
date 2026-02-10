import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const Sidebar = styled.div`
    width: 15%;
    height: 100%;
    padding: var(--space-md);
    padding: 0;
`;

const ContentBody = styled.div`
    width: 85%;
    height: 100%;
    padding: var(--space-md);
    padding: 0;
`;

export{
    Container,
    Sidebar,
    ContentBody
}