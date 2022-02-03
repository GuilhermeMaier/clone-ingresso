import styled from "styled-components";

export const TagsContainer = styled.div`
  display: inline-flex;
  text-shadow: none;
`;

export const Tag = styled.div`
  padding: 4px 10px;
  padding-bottom: 3px;
  color: #232723;
  margin-right: 5px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;

  @media (max-width: 1100px) {
    font-size: 8px;
  }
`;

export default TagsContainer;
