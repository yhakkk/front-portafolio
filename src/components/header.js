import { Header } from "antd/es/layout/layout";
import { Menu } from "antd";
import { UserOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

export default function Header2() {
  return (
    <Header style={{color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
          <Menu.Item id="header" key="1" icon={<UserOutlined />} onClick={() => window.location.hash = "#sobre-mi"}>
            Sobre mí
          </Menu.Item>
          <Menu.Item id="header" key="2" icon={<GithubOutlined />} onClick={() => window.location.hash = "#proyectos"}>
            Proyectos
          </Menu.Item>
          <Menu.Item id="header" key="3" icon={<MailOutlined />} onClick={() => window.location.hash = "#contacto"}>
            Contacto
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}
