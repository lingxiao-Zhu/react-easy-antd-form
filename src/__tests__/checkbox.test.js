import React from 'react';
import TestRenderer from 'react-test-renderer';
import CheckBox from '../CheckBox';

describe('CheckBox组件', () => {
  it('Checkbox不传options数组，会显示"请检查Options是否正确！！"', () => {
    const item = {};

    const testRenderer = TestRenderer.create(<CheckBox item={item} />);

    expect(testRenderer.root.findByType('span').props.style.color).toBe('red');
    expect(testRenderer.root.findByType('span').props.children).toBe(
      '请检查Options是否正确！！'
    );
  });

  it('Checkbox传入options数组，会显示多个label', () => {
    const item = {
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]
    };

    const testRenderer = TestRenderer.create(<CheckBox item={item} />);

    expect(testRenderer.root.findByType('div').props.className).toBe(
      'ant-checkbox-group'
    );
    expect(testRenderer.root.findByType('div').props.children.length).toBe(
      item.options.length
    );
  });
});
