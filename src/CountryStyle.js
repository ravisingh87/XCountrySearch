import styled from 'styled-components';

export const CountryDivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CountryDivStyle = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
`;

export const CountryImg = styled.img`
  width: 80px;
  height: 80px;
`;
export const CountryHeading = styled.h5`
  text-align: center;
  margin-top: 10px;
`;

export const CountryHeader = styled.header`
  width: 100%;
  height: 3rem;
  background-color: #f4efef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CountryInput = styled.input`
  width: 50%;
  height: 2rem;
  padding: 10px;
`;
