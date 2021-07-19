import styled from 'styled-components';
import { values } from '../../styles/vars';

export const Container = styled.div`
  height: calc(100% - ${values.headerHeight});
  display: grid;
  grid-template-columns: 80px 1fr;
`;
