import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ListContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const ItemContainer = styled.div`
    text-align: center;
    width: 100%;
    padding: 5px auto;
    background-color: antiquewhite;
    border: 1px outset black
`;

export const Heading = styled(ItemContainer)`
    font-size: 2em;
    background-color: lightskyblue;
    display: flex;
    justify-content: space-around;
`;

export const CheckmarkButton = styled.img`
    width: 16px;
    margin-left: 15px;
`;

export const StyledForm = styled.form`
    width: 500px;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const InputBox = styled.input`
    width: 60%;
`;

export const Button = styled.button`
    width: 30%;
    margin: 0;
    background-color: lightsalmon;
    margin: auto 0;
`;

export const TodoText = styled.span`
    text-decoration: ${props => (props.completed) ? 'line-through' : 'inherit'};
`;

export const Attribution = styled.p`
    position: fixed;
    bottom: 0;
    left: 0;
`;
