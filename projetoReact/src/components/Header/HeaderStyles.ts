import styled from "styled-components";

export const HeaderContainer = styled.div`
background-color: black;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
    width: 3.5rem;
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
