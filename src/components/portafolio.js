import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Card,
  Row,
  Col,
  Typography,
  Button,
  List,
  Divider,
  Avatar,
} from "antd";

import axios from "axios";

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/yhakkk/repos")
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error buscando los repos:", error);
      });
  }, []);

  const aptitudes = [
    "Desarrollo Frontend: React",
    "Desarrollo Backend: Node.js",
    "Sistemas Operativos: Linux",
    "Base de Datos: MongoDB, PostgreSQL",
    "Especificación de Requerimientos: Historias de Usuario",
    "Análisis de Datos: Power BI",
    "Control de Versiones: GitHub",
    "Documentación de Sistemas",
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "20px" }}>
        <section id="sobre-mi" >
          <Title level={2}>Sobre mí</Title>
        
          <Paragraph >
            Soy un estudiante avanzado de Analista de Sistemas con una sólida
            formación en desarrollo de software. Me apasiona la programación y
            estoy comprometido en alcanzar mi máximo potencial profesional.
            Busco constantemente nuevos desafíos que me permitan crecer y
            adquirir nuevas habilidades

            <List
              style={{background:"#f1f2f3"}}
              header={<div><strong>Aptitudes</strong></div>}
              bordered
              dataSource={aptitudes}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            />
          </Paragraph>
        </section>

        <Divider />

        <section id="proyectos">
          <Title level={2}>Mis Proyectos</Title>
          <Row gutter={[16, 16]}>
            {repos.slice(0, 9).map((repo) => (
              <Col span={8} key={repo.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="repo-thumbnail"
                      src={`https://img.shields.io/github/last-commit/${repo.owner.login}/${repo.name}`}
                    />
                  }
                >
                  <Card.Meta
                    title={repo.name}
                    description={
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver repositorio
                      </a>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <Divider />

        <section id="contacto">
          <Title level={2}>Contacto</Title>
          <Paragraph>
            Puedes contactarme a través de mi correo electrónico:{" "}
            <a href="tomasblanco.contact@gmail.com">
              tomasblanco.contact@gmail.com
            </a>
            .
          </Paragraph>
        </section>
      </Content>

      <Footer style={{ textAlign: "center", backgroundColor:"#f1f2f3"}}>
        Portafolio creado por Tomas Aníbal Blanco ©2024
      </Footer>
    </Layout>
  );
};

export default Portfolio;
