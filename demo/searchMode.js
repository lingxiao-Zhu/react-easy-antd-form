import React from 'react';
import Form from '../src';

export default class SearchMode extends React.Component {
  state = {
    fields: [
      {
        field: 'name',
        label: '名称',
        type: 'Input',
        required: false
      },
      {
        field: 'DatePicker',
        label: 'DatePicker',
        type: 'DatePicker',
        initialValue: 1557477865444,
        required: false
      },
      {
        field: 'RangePicker',
        label: 'RangePicker',
        initialValue: ['2019-12-10', 1557477865444],
        format: 'YYYY-MM-DD HH:mm:ss',
        type: 'RangePicker',
        required: false
      }
    ]
  };

  onSubmit = (res) => {
    console.log(res);

    // 返回一个promise，form组件会自动进行loading开启和关闭
    // return new Promise((resolve) => {
    //   setTimeout(resolve, 1000);
    //   // this.onCancel()
    // }).catch(() => console.log('Oops errors!'));
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
