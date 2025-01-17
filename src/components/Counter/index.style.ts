import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  user-select: none;
`;

export const Body = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
  align-items: center;
`;

export const CountButton = styled.button`
  background-color: white;
  border-radius: 100%;
  border: 1px solid #dcdee2;
  width: 37px;
  height: 37px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  &:disabled {
    cursor: not-allowed;
    color: #dcdee2;
  }
`;

export const Count = styled.input`
  border: none;
  border-bottom: 1px solid rgb(118, 118, 118);
  width: 40px;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  line-height: 35px;
`;
