import React from 'react';

import Form from '../src';

export default class DefaultMode extends React.Component {
  state = {
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

  render() {
    const { fields } = this.state;

    return <Form fields={fields} />;
  }
}
