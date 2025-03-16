import styled from "styled-components";

export const Container = styled.main`
    max-width: 1240px;
    margin: 4rem auto;
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;

    & > * {
        flex: 1 300px;
    }
`
