import styled from 'styled-components'
import { FaXmark } from "react-icons/fa6";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

export const StyledModal = styled.div`
    width: 700px;
    height: 480px;
    background-color: var(--color-bg);
    z-index: 1000;
`

export const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-surface);
    padding: var(--space-md);
`

export const Title = styled.h1`
    font-size: var(--text-xl);
    margin: 0;
`

export const IconCloseBtn = styled(FaXmark)`
    color: var( --color-text-secondary);
    font-size: 26px;
    font-weight: var(--text-w-bold);
    cursor: pointer;
`

export const BodyModal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: var(--space-md);
`