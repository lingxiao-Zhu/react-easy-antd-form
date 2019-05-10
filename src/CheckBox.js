import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

class MyCheckbox extends Component {
  componentDidMount() {
    if (!this.isOptionsValid()) {
      // eslint-disable-next-line no-console
      console.error('使用Checkbox组件请传入options数组，且长度要大于0');
    }
  }

  isOptionsValid = () => {
    const { item } = this.props;
    const { options } = item;

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

MyCheckbox.propTypes = {
  item: PropTypes.object.isRequired
};

export default MyCheckbox;
