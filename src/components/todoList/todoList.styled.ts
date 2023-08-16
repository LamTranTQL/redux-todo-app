import { styled } from "styled-components";

const Model = styled.div`
  width: 500px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #3a3a3a;
`;

const Thead = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Row = styled(Thead)`
  border-top: 1px solid #3a3a3a;
`;

const Name = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-right: 1px solid #3a3a3a;
`;

const Action = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Item = styled(Title)`
  font-weight: 400;
  font-size: 16px;
  color: #3a3a3a;
`;

export { Model, Header, Content, Title, Item, Table, Thead, Row, Name, Action };
