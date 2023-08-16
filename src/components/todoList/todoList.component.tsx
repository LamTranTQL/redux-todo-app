import React, { useState } from "react";
import {
  Model,
  Header,
  Content,
  Title,
  Item,
  Table,
  Thead,
  Name,
  Action,
  Row,
} from "./todoList.styled";
import { Button, Input } from "antd";
import {
  editUser,
  setDeleteUser,
  setUpdateUser,
  setUser,
  userState,
} from "./todoListSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function TodoList() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.todoList);

  const [userName, setUserName] = useState<string>("");
  const [children, setChildren] = useState<string>("Add New");
  const [editUser, setEditUser] = useState<userState>();
  const [indexUser, setIndexUser] = useState<number>(-1);

  const handleInputChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (children === "Add New") {
      const user: userState = {
        id: createId(),
        name: userName,
      };

      dispatch(setUser(user));
      setUserName("");
    } else if (children === "Update") {
      const _editUSer = { ...editUser };
      _editUSer.name = userName;

      let valueEdit: editUser = {
        // @ts-ignore
        user: _editUSer,
        index: indexUser,
      };

      dispatch(setUpdateUser(valueEdit));

      console.log(valueEdit);
      setChildren("Add New");
      setUserName("");
    }
  };

  const createId = (): string => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const hanldeEditButtonClick = (value: userState, index: number) => {
    setUserName(value.name);
    setEditUser(value);
    setIndexUser(index);
    setChildren("Update");
  };

  const handleDeleteButtonClick = (index: number) => {
    dispatch(setDeleteUser(index));
  };

  return (
    <Model>
      <Header>
        <Input
          placeholder='Enter Name'
          value={userName}
          onChange={handleInputChange}
        />
        <Button type='primary' onClick={handleAddButtonClick}>
          {children}
        </Button>
      </Header>

      <Content>
        <Title>Users</Title>

        <Table>
          <Thead>
            <Name>Name</Name>
            <Action />
          </Thead>

          {users.length !== 0 &&
            users.map((value: userState, i: number) => {
              return (
                <Row key={value.id}>
                  <Name>
                    <Item>{value.name}</Item>
                  </Name>
                  <Action>
                    <Button
                      shape='circle'
                      icon={<EditOutlined />}
                      onClick={() => hanldeEditButtonClick(value, i)}
                    />
                    <Button
                      shape='circle'
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => handleDeleteButtonClick(i)}
                    />
                  </Action>
                </Row>
              );
            })}
        </Table>
      </Content>
    </Model>
  );
}

export default TodoList;
