import styled from "styled-components";

export const HeaderContainer = styled.div`
background-color: #FFFFFF;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    display: block;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: auto;
  }
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;

  .userName {
    font-weight: bold;
  }

  .userEmail {
    color: gray;
  }
`;

export const ArrowIcon = styled.div`
  width: 3rem;
  img {
    display: block;
  }
`;
