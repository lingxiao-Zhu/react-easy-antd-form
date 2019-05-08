/**
 * 通过 item.type，返回对应的控件类型
 */

import React from 'react';
import { Input, InputNumber, DatePicker } from 'antd';
import Upload from '../Upload';
import Select from '../Select';
import Radio from '../Radio';
import Checkbox from '../CheckBox';

const { RangePicker } = DatePicker;

function TypeConversion(item) {
  let C;
  switch (item.type) {
    case 'Checkbox':
      C = Checkbox;
      break;
    case 'RangePicker':
      C = RangePicker;
      break;
    case 'DatePicker':
      C = DatePicker;
      break;
    case 'Radio':
      C = Radio;
      break;
    case 'Select':
      C = Select;
      break;
    case 'Upload':
      C = Upload;
      break;
    case 'InputNumber':
      C = InputNumber;
      break;
    case 'Custom': // 自定义组件
      C = item.component;
      break;
    case 'Input':
    default:
      C = Input;
      break;
  }

  const { antProps, ...otherProps } = item;

  return <C item={otherProps} {...antProps} style={{ width: '100%' }} />;
}

export default TypeConversion;
