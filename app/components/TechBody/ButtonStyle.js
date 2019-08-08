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
  box-shadow: 
    1px 0 0 0 #C1C1C1, 
    0 1px 0 0 #C1C1C1, 
    1px 1px 0 0 #C1C1C1,   /* Just to fix the corner */
    1px 0 0 0 #C1C1C1 inset, 
    0 1px 0 0 #C1C1C1 inset;
`;