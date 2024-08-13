import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f855a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoginContainer = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: 35rem; /* Aumentei a largura do login box */
  height: 32rem;
  background-color: #ffffff; /* bg-white */
  display: flex;
  flex-direction: column;
  padding: 5rem;
  gap: 3.5rem;
  border-radius: 1rem; /* rounded-2xl */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  justify-content: flex-start;

  span {
    font-size: 1.25rem; /* text-xl */
  }

  h1 {
    font-size: 2.5rem; /* text-4xl */
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* gap-6 */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 1rem 0.75rem;
  font-size: 0.875rem; /* text-sm */
  color: #1f2937; /* text-gray-900 */
  background-color: transparent;
  border: 1px solid #d1d5db; /* border-gray-300 */
  border-radius: 0.5rem; /* rounded-lg */

  &:focus {
    outline: none;
    border-color: #38a169; /* focus:border-green-600 */
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 0.25rem;
  padding: 0 0.5rem;
  font-size: 0.875rem; /* text-sm */
  color: #6b7280; /* text-gray-500 */
  background-color: #ffffff; /* bg-white */
  transition: all 0.3s ease;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem; /* text-base */
  color: #2f855a; /* text-green-800 */
  background-color: #c6f6d5; /* bg-green-200 */
  border-radius: 0.75rem; /* rounded-xl */
  transition: all 0.3s ease;

  &:hover {
    background-color: #48bb78; /* hover:bg-green-400 */
    color: #e6fffa; /* hover:text-green-200 */
  }
`;
