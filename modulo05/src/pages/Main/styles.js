import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs(props => ({}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`;
export const InputTextArea = styled.input.attrs(props => ({
  type: 'text',
}))`
  flex: 1;
  border: 1px solid #ccc;
  padding: 10px 15px;
  border-radius: 4px;
  ${props =>
    props.error &&
    css`
      border: 1px solid red;
    `}
`;
export const LabelError = styled.label`
  color: red;
  font-size: 12px;
  font-weight: bold;
`;
const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  align-self: start;
  background: #7159c1;
  border: 0;
  padding: 8px 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: inline-block;
  justify-content: center;
  align-items: baseline;
  svg {
    margin: 0;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 0.5s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #7159c1;
    }
  }
  a {
    color: #7159c1;
    text-decoration: none;
  }
`;

// export const Title = styled.h1`
//   color:#fff;
//   /* font-size: 24px;
//   color: ${props => {
//     if (props.error) {
//       return 'red';
//     }
//     return '#7159c1';
//   }};
//   font-family: Arial, Helvetica, sans-serif;

//   small {
//     font-size: 14px;
//     color: #333;
//   } */
// `;
