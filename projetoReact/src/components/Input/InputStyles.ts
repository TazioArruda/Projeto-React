import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  &.active label {
    top: -1rem;
    left: 0.75rem;
    font-size: 0.75rem;
    color: #4a4a4a;
  }

  &.error input {
    border-color: #e74c3c;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #4a4a4a;
    outline: none;
  }

  &:focus + label {
    top: -1rem;
    left: 0.75rem;
    font-size: 0.75rem;
    color: #4a4a4a;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-size: 1rem;
  color: #999;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #4a4a4a;

  &:hover {
    color: #333;
  }
`;
