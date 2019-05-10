# react-easy-antd-form

基于 React，Ant-Design 封装的声明式 Form 业务组件，方便快捷构建表单，减少大量业务代码。

[![Build Status](https://travis-ci.org/lingxiao-Zhu/react-easy-antd-form.svg?branch=master)](https://travis-ci.org/lingxiao-Zhu/react-easy-antd-form)
[![Coverage Status](https://coveralls.io/repos/github/lingxiao-Zhu/react-easy-antd-form/badge.svg?branch=master)](https://coveralls.io/github/lingxiao-Zhu/react-easy-antd-form?branch=master)
![](https://img.shields.io/github/last-commit/lingxiao-Zhu/react-easy-antd-form.svg)
![](https://img.shields.io/github/languages/code-size/lingxiao-Zhu/react-easy-antd-form.svg)
![](https://img.shields.io/npm/dw/react-easy-antd-form.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/react.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/antd.svg)

## 前提

使用此模块的项目需要配置完成 AntD

## 安装

`yarn add react-easy-antd-form`

## 引入

```javascript
import Form from "react-easy-antd-form";
```

## 参数

| 名称     | 说明                                                                                                                                 | 类型                                  | 默认值     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ---------- |
| fields   | 需要渲染出的表单列表                                                                                                                 | 数组[field]，field 类型见下方         | null，必传 |
| mode     | 表单展示类型                                                                                                                         | 'default'，'modal', 'search', 'plain' | 'default'  |
| onSubmit | 数据验证成功后回调事件，能接受到数据；而且传入后表单会渲染内置 Button, 如果函数中返回一个 promise， button 还会自动管理 loading 效果 | Function(values)                      | null       |
| title    | mode=modal 时，弹框的名称                                                                                                            | string                                | form 提交  |
| visible  | mode=modal 时，对话框是否可见                                                                                                        | boolean                               | false      |
| onCancel | mode=modal 时，点击遮罩层或右上角叉或取消按钮的回调，一般用于设置 visible 为 false                                                   | function                              | null       |

## field 结构

| 名称         | 说明                                                                         | 类型                                                                                                        | 默认值       |
| ------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ |
| field        | 表单字段，用于提交后台                                                       | string                                                                                                      | null，必传   |
| label        | 字段展示名称                                                                 | string                                                                                                      | null，必传   |
| initialValue | 默认值                                                                       |                                                                                                             | null         |
| antProps     | 支持 AntD 控件自带的所有属性                                                 | eg：{ addonBefore: 'Http://' }                                                                              | null         |
| required     | 是否必填                                                                     | boolean                                                                                                     | true         |
| type         | 控件类型                                                                     | 'Checkbox','RangePicker','DatePicker','Radio','Select','InputNumber','Custom','Input', 'Custom'为自定义组件 | 'Input'      |
| component    | type=Custom 时，传入的自定义组件。组件接受的 props 属性：value 和 onChange。 | `<CustomComponent>`                                                                                         | null         |
| format       | type=DatePicker 或者 RangePicker 时，日期格式                                | string                                                                                                      | 'YYYY-MM-DD' |

## Demo

#### modal 模式

```javascript
 state = {
    visible: false,
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

  open = () => {
    this.setState({
      visible: true
    });
  };

  cancel = () => {
    this.setState({
      visible: false
    });
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
    const { fields, visible } = this.state;

    return (
      <div>
        <Button type="primary" onClick={this.open}>
          新增
        </Button>
        <Form
          title="新增"
          fields={fields}
          mode="modal"
          visible={visible}
          onCancel={this.cancel}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
```

#### search 模式

```javascript
state = {
    fields: [
      {
        field: 'name',
        label: '名称',
        type: 'Input'
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
        type: 'RangePicker',
        required: false
      }
    ]
  };

  onSubmit = (res) => {
    console.log(res);

    // 返回一个promise，form组件会自动进行loading开启和关闭
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
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
```

## 有问题？加入我们

QQ 群：684950903（前端开源社区）
