import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #3f51b5;
  text-align: center;
  color: #fff;
  border: 1px solid red;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  width: 120px;
  height: 60px;
  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
