import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
`;

const Sidebar = styled.div`
    width: 20%;
    height: 100%;
    padding: var(--space-md);
    padding: 0;
`;

const ContentBody = styled.div`
    width: 80%;
    height: 100%;
    padding: var(--space-md);
    padding: 0;
`;

export{
    Container,
    Sidebar,
    ContentBody
}