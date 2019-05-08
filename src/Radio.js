import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class MyRadio extends Component {
  componentDidMount() {
    if (!this.isOptionsValid()) {
      // eslint-disable-next-line no-console
      console.error('使用Radio组件请传入options数组，且长度要大于0');
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
      <RadioGroup {...otherProps}>
        {options.map(option => (
          <Radio key={option.label} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    ) : (
      <span style={{ color: 'red' }}>请检查配置项是否正确！！</span>
    );
  }
}

MyRadio.propTypes = {
  item: PropTypes.object.isRequired
};

export default MyRadio;
