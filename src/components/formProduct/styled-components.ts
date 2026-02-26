import styled from 'styled-components'

interface InputProductProps {
  $width?: number
  $height?: number
}

interface BtnFormProps {
  $primary?: boolean
}

export const FormProducts = styled.form`
    padding: var(--space-md);
`

export const LabelProduct = styled.label`
    font-size: var(--text-md);
    font-weight: var(--text-w-bold);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: var(--space-lg);

`

export const InputProduct = styled.input<InputProductProps>`
    width: ${(props) => props.$width ? `${props.$width}px` : "100%"};
    height: ${(props) => props.$height ? `${props.$height}px` : "100%"};
    background-color: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--text-md);
    color: var(--color-text-primary);
    padding-left: var(--space-md);
`

export const ContentInfoForm = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;
`

export const ContentBtnForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: var(--space-lg)
`

export const BtnForm = styled.button<BtnFormProps>`
    width: 150px;
    height: 40px;
    background-color: ${props => props.$primary ? "var(--color-primary-hover)" : "var(--color-border)"};
    color: var( --color-text-primary);
    border-radius: var(--radius-md);
    border: none;
    font-size: var(--text-md);
    font-weight: var(--text-w-bold);
    cursor: pointer;


    &:hover {
        background-color: ${props => props.$primary ? "var(--color-primary)" : "var(--color-border-light)"};
    }
`