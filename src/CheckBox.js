import React, { Component } from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

class MyCheckbox extends Component {
  componentDidMount() {
    if (!this.isOptionsValid()) {
      console.error('使用Checkbox组件请传入options数组，且长度要大于0');
    }
  }

  isOptionsValid = () => {
    const { options } = this.props.item;

    return options && Array.isArray(options) && options.length > 0;
  };

  render() {
    const { item, ...otherProps } = this.props;

    const { options } = item;

    return this.isOptionsValid() ? (
      <CheckboxGroup {...otherProps} options={options} />
    ) : (
      <span style={{ color: 'red' }}>请检查Options是否正确！！</span>
    );
  }
}

export default MyCheckbox;
