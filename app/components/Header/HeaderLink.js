import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  width: 50%;
  text-decoration: none;
  border-radius: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px solid #C1C1C1;
  color: #000000;
  margin-bottom: -15px;
  padding-bottom: 17px;

  &:focus {
    color: #E50075;
    border-bottom: 4px solid #E50075
  }

`;
