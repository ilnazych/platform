import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { MyHeader } from "../../myHeader/MyHeader";
import { MenuList } from "../../menuList/MenuList";
import { Outlet } from "react-router-dom";


const { Sider } = Layout;

const Root: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{padding: "10px"}}>
      <MyHeader />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <MenuList />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Root;
