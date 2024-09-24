import { Menu } from "antd";
import { MenuListItems } from "./MenuListItems";

export function MenuList() {
  return (
    <Menu
      mode="vertical"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0, borderRadius: "10px", }}
      items={MenuListItems}
    />
  );
}
