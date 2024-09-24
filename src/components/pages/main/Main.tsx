import { FloatButton, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import UserCard from "../../userCard/UserCard";
import { MessageOutlined } from '@ant-design/icons';
import { setDrawer } from "../../../features/chat/chat";
import MessengerDrawer from "../../chat/MessengerDrawer";
import { useAppDispatch } from "../../../app/store/hooks";

export function Main() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch()
  
  const setOpenDrawer = () => {
    dispatch(setDrawer())
  }

  return (
    <>
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <div
        style={{
          padding: 24,
          textAlign: "center",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <p>Сотрудники ИТ отдела</p>
       <div style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(5, minmax(0, 1fr))"}}>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
        <FloatButton
        tooltip={<div>custom badge color</div>}
        badge={{ count: 5, color: 'blue' }}
        icon={<MessageOutlined />}
        onClick={setOpenDrawer}
      />
      </div>
    </Content>
    <MessengerDrawer/>
    </>
  );
}
