import { Button, Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import Search from "../search/Search";
import { MessageOutlined } from '@ant-design/icons';
import { setDrawer } from "../../features/chat/chat";
import { useAppDispatch } from "../../app/store/hooks";
import { Link } from "react-router-dom";

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));


export function MyHeader() {
  const dispatch = useAppDispatch()
  
  const setOpenDrawer = () => {
    dispatch(setDrawer())
  }
  return (
    <Header
      style={{
        display: "flex",
        gap: "30px",
        alignItems: "center",
        borderRadius: "10px",
        marginBottom: "10px",
        backgroundColor: "white",
      }}
    >
      <div style={{display: "flex", justifyContent: "center"}}>
        <img src="logo.svg" alt="logo" />
      </div>
      <Search/>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
      <div style={{display: "flex", gap: "15px"}}>
        <Button icon={<MessageOutlined />} onClick={setOpenDrawer}>Чаты</Button>
        <Button type="primary">Поддержка</Button>
        <Button><Link to="auth">Выйти</Link></Button>
      </div>
    </Header>
  );
}
