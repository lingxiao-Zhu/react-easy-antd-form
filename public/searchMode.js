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

  render() {
    const { fields } = this.state;

    return (
      <div>
        <Form fields={fields} mode="search" />
      </div>
    );
  }
}
