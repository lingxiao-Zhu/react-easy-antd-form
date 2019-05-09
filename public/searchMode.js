import React from 'react';

import Form from '../src';

export default class SearchMode extends React.Component {
  state = {
    fields: [
      {
        field: 'name',
        label: '名称',
        type: 'Input'
      },
      {
        field: 'class',
        label: '部门',
        type: 'Input'
      }
    ]
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
    const { fields } = this.state;

    return (
      <div>
        <Form fields={fields} mode="search" onSubmit={this.onSubmit} />
      </div>
    );
  }
}
