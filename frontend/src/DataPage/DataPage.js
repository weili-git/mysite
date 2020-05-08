import * as React from "react";
import {Form, Button, Input, } from 'antd';

const { Search } = Input;

export class DataPage extends React.Component {
    render() {
        return(
            <div>
                <Form>
                    <Form.Item label="数据集路径" rules={[{ required: true, message: 'The dataset path is not valid!' }]}>
                        <Search placeholder="input dataset path." 
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
            </div>
        )
    }
}