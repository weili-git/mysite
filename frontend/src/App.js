import * as React from "react";
import "./App.css";
import { Layout, Button, Menu, Form, Input, Checkbox, Progress, Icon, Avatar } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;


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

  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{position: "fixed", zIndex: 1, width: "100%"}}>
            <Avatar size={64} 
                    style={{float: "left", background: "#000000"}} 
                    icon={<GithubOutlined />}
            >
            </Avatar>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float: "left", marginLeft: 20 }}>
              <Menu.Item key="1">数据预处理</Menu.Item>
              <Menu.Item key="2">加载模型</Menu.Item>
              <Menu.Item key="3">测试</Menu.Item>
            </Menu>
          </Header>
          <Content style={{padding: 64, height: 1000, marginTop: 64, marginLeft: 200, marginRight: 200}}>
            <Form>
              <Form.Item label="数据集路径" rules={[{ required: true, message: 'The dataset path is not valid!' }]}>
                <Search 
                        placeholder="input dataset path." 
                        enterButton="浏览" 
                        onSearch={value => console.log(value)}>
                </Search>
              </Form.Item>
              <Form.Item> 
                <Button type="primary" htmlType="submit" onClick={this.increase}>
                  处理
                </Button>
                <Button type="primary" onClick={this.decrease} style={{marginLeft: 10}}>
                  取消
                </Button>
              </Form.Item>
            </Form>
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
