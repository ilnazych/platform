import { Breadcrumb } from "antd";

export function MyBreadcrumbs() {
  return (
    <Breadcrumb style={{ margin: "10px 20px" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}
