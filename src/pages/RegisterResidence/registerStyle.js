import styled from 'styled-components';
import { colors } from '../../styles/vars';

export const SearchArea = styled.div`
  width: 80%;
  height: 80px;
  background-color: #fff;
  padding: 20px 30px;
  font-size: 0.85rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
  /* margin-top: 20px;
   */
  .title {
    position: absolute;
    top: 0;
  }
`;

export const SectionForm = styled.div`
  /* background-color: red; */
  /* width: 100%; */
  padding: 20px 0;
  margin-top: 5px;
  border-top: 1px solid ${colors.border};
  border-radius: 5px;

  span.information {
    font-size: 0.9rem;

    margin-left: 50px;
    color: #5a5a5a;
  }
`;
