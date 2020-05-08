import * as React from "react";
import {Form, Button, Select} from 'antd';

const { Option } = Select;


export class DataPage extends React.Component {
    state = {
        dataset: "bird"
    };

    Selected = (dataset) => {
        this.setState({ dataset });
    };

    LoadData = () => {
        alert(this.state.dataset)
    };

    render() {
        return(
            <div>
                <Form>
                    <Form.Item label="数据集" >
                        <Select onChange={(Value) => this.Selected(Value)} defaultValue="bird">
                            <Option value="bird">bird dataset</Option>
                            <Option value="coco">coco dataset</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item> 
                        <Button type="primary" htmlType="submit" onClick={this.LoadData}>
                        处理
                        </Button>
                        <Button type="primary" style={{marginLeft: 10}}>
                        取消
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}