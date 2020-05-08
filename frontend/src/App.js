import * as React from "react";
import "./App.css";
import { Layout,  Menu, Progress, Avatar } from 'antd';
import { Route, Link } from "react-router-dom";

import { GuidePage } from "./GuidePage/GuidePage";
import { DataPage } from "./DataPage/DataPage";
import { ConfigPage } from "./ConfigPage/ConfigPage";
import { ConvertPage } from "./ConvertPage/ConvertPage";
import { bhistory } from "./index";

import { GithubOutlined, SettingOutlined, ControlOutlined, PlaySquareOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;


class App extends React.Component {
  state = {
    percent: 0,
    data_dir: "C:/Users/Rain/Desktop/project/AttnGAN/data/birds"
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decrease = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  clickMenu = (key) => {
    if (key=="1") {
      bhistory.push("/data");
    }
    else if(key=="2"){
      bhistory.push("/config");
    }
    else //key==3
    {
      bhistory.push("/convert");
    }
      
  };

  clickAvatar = () => {
    bhistory.push("/");
  }

  render() {  //
    return (
      <div className="App">
        <Layout>
          <Header style={{position: "fixed", zIndex: 1, width: "100%"}}>
            <Avatar size={64} 
                    style={{float: "left", background: "#000000"}} 
                    icon={<GithubOutlined />}
                    onClick={this.clickAvatar}
            >
            </Avatar>
            <Menu theme="dark" className="MainMenu" mode="horizontal" defaultSelectedKeys={['1']} style={{float: "left", marginLeft: 20 }} onClick={(item) => this.clickMenu(item.key)   }> 
              <Menu.Item icon={<SettingOutlined />} key="1">数据预处理</Menu.Item>
              <Menu.Item icon={<ControlOutlined />} key="2">相关配置</Menu.Item>
              <Menu.Item icon={<PlaySquareOutlined />} key="3">测试</Menu.Item>
            </Menu>
          </Header>
          <Content style={{padding: 64, height: 1000, marginTop: 64, marginLeft: 200, marginRight: 200}}>
            <Route exact path="/" component={GuidePage} />
            <Route path="/data" component={DataPage} />
            <Route path="/config" component={ConfigPage} />
            <Route path="/convert" component={ConvertPage} />
          </Content>
          <Footer>
            <Progress percent={this.state.percent}></Progress>
          </Footer>
        </Layout>
      </div>
    );
  }
} 

export default App;
