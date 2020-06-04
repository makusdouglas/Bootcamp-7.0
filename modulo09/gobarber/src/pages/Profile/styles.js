import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #ffffff;
      margin-top: 5px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      padding: 4px 0;
      color: #fff;
      background: rgba(255, 0, 0, 0.4);
      margin-bottom: 15px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 20px 0;
    }

    button {
      margin-top: 5px;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
  > button {
    width: 100%;
    margin-top: 10px;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #ffffff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }
  }
`;
