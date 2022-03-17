import React from "react";
import "../styles/home.scss";

import { Layout } from "antd";
import Table from "../components/table/Table";
import LeafletMap from "../components/leafletMap/LeafletMap";
const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <div className="journal">
      <div className="container">
        <Layout>
          <Header>
            <div className="logo">
              <h2 className="logo__title">Logo_Name</h2>
            </div>
          </Header>
          <Content>
            <div className="j__main">
              <div className="box">
                <Table />
              </div>
              <div className="box">
                <LeafletMap />
              </div>
            </div>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
