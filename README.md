# react-easy-antd-form

基于 React，Ant-Design 封装的声明式 Form 业务组件，方便使用。

[![Build Status](https://travis-ci.org/lingxiao-Zhu/react-easy-antd-form.svg?branch=master)](https://travis-ci.org/lingxiao-Zhu/react-easy-antd-form)
[![Coverage Status](https://coveralls.io/repos/github/lingxiao-Zhu/react-easy-antd-form/badge.svg?branch=master)](https://coveralls.io/github/lingxiao-Zhu/react-easy-antd-form?branch=master)
![](https://img.shields.io/github/last-commit/lingxiao-Zhu/react-easy-antd-form.svg)
![](https://img.shields.io/github/languages/code-size/lingxiao-Zhu/react-easy-antd-form.svg)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
![](https://img.shields.io/npm/dw/react-easy-antd-form.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/react.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/antd.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/prop-types.svg)

## 前提

使用此模块的项目需要配置完成 AntD

## 安装

`yarn add react-easy-antd-form`

## 引入

```javascript
import Form from "react-easy-antd-form";
```

## 使用

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
        field: 'class',
        label: '部门',
        type: 'Input'
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
