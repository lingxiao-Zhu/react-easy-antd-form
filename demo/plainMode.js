import React from 'react';

import Form from '../src';

export default class PlainMode extends React.Component {
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
        separate: true,
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

    return (
      <div>
        <Form fields={fields} mode="plain" onSubmit={() => {}} />
      </div>
    );
  }
}
