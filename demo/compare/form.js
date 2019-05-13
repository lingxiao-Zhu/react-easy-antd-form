import React from 'react';
import { Button } from 'antd';
import Form from '../../src';

class form extends React.Component {
  state = {
    visible: false,
    fields: [
      {
        field: 'name',
        label: '名称'
      },
      {
        field: 'age',
        label: '年龄',
        type: 'InputNumber'
      },
      {
        field: 'birthday',
        label: '生日',
        type: 'DatePicker'
      }
    ]
  };

  onSubmit = res => new Promise((resolve) => {
      console.log(res);
      setTimeout(resolve, 1000);
    }).catch(() => console.log('Oops errors!'));

  onCancel = () => {
    this.setState({
      visible: false
    });
  };

  openModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { fields, visible } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.openModal}>
          新增用户
        </Button>
        <Form
          mode="modal"
          fields={fields}
          title="新增用户"
          visible={visible}
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

export default form;
