import React from 'react';
import { Button } from 'antd';

import Form from '../src';

export default class ModalMode extends React.Component {
  state = {
    visible: false,
    fields: [
      {
        field: 'name',
        label: '名称',
        type: 'Input',
        antProps: {
          addonBefore: 'Http://'
        }
      },
      {
        field: 'Checkbox',
        label: 'Checkbox',
        type: 'Checkbox',
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ]
      },
      {
        field: 'Radio',
        label: 'Radio',
        type: 'Radio',
        initialValue: '11',
        options: [
          {
            label: '11',
            value: '11'
          },
          {
            label: '22',
            value: '22'
          }
        ]
      },
      {
        field: 'select',
        label: 'Select',
        type: 'Select',
        initialValue: '22',
        options: [
          {
            label: '11',
            value: '11'
          },
          {
            label: '22',
            value: '22'
          }
        ]
      }
    ]
  };

  open = () => {
    this.setState({
      visible: true
    });
  };

  cancel = () => {
    this.setState({
      visible: false
    });
  };

  onSubmit = (res) => {
    console.log(res);

    // 返回一个promise，form组件会自动进行loading开启和关闭
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
      // this.onCancel()
    }).catch(() => console.log('Oops errors!'));
  };

  render() {
    const { fields, visible } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.open}>
          新增
        </Button>
        <Form
          title="新增"
          fields={fields}
          mode="modal"
          visible={visible}
          onCancel={this.cancel}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
