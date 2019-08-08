import styled from 'styled-components';
import NormalA from 'components/A';

const A = styled(NormalA)`
  padding: 0em;
  font-weight: 500;
  font-family: 'Avenir Next', sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  border-bottom: 1px solid #D3D3D3
`;

export default A;