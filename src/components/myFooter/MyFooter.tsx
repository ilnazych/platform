import { Footer } from "antd/es/layout/layout";

export function MyFooter() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Тракресурс ©{new Date().getFullYear()}
    </Footer>
  );
}
