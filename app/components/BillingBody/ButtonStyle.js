import styled from 'styled-components';

export default styled.div`
  width: 50%;
  height: 168px;
  color: #000000;
  cursor: pointer;
  outline: 0;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  text-decoration: none;
  border-radius: none;
  user-select: none;
  border: 1px solid #C1C1C1;

  &:nth-child(even) {
    margin-left: -1px;
  }

  &:nth-child(3) {
    margin-top: -1px;
  }

  &:last-child {
    margin-top: -1px;
  }
  
`;