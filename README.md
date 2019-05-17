# react-easy-antd-form

基于 React，Ant-Design 封装的声明式 Form 业务组件，方便快捷构建表单，减少大量业务代码，并支持 AntD 控件的所有属性。

[![Build Status](https://travis-ci.org/lingxiao-Zhu/react-easy-antd-form.svg?branch=master)](https://travis-ci.org/lingxiao-Zhu/react-easy-antd-form)
[![Coverage Status](https://coveralls.io/repos/github/lingxiao-Zhu/react-easy-antd-form/badge.svg?branch=master)](https://coveralls.io/github/lingxiao-Zhu/react-easy-antd-form?branch=master)
![](https://img.shields.io/github/last-commit/lingxiao-Zhu/react-easy-antd-form.svg)
![](https://img.shields.io/github/languages/code-size/lingxiao-Zhu/react-easy-antd-form.svg)
![](https://img.shields.io/npm/dw/react-easy-antd-form.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/react.svg)
![](https://img.shields.io/npm/dependency-version/react-easy-antd-form/antd.svg)

## 效果

在 demo 文件夹下的 compare 文件夹中，通过 AntD 的 form 组件和 react-easy-antd-form(简称:reaf)，实现一个通过弹出框新增用户的功能进行对比（只使用了三个控件），AntD 的代码量 109 行，reaf 为 64 行。
可想而知，随着录入数据的增多，代码量的差距会越来越多，维护和升级成本也越来越大。

![功能截图](/screenshots/1.png)

## 优点

- 通过数据源声明式构建表单，快捷明了，复用性强，减少冗余代码。
- 已封装好常用 form 布局方式，eg：搜索模式、弹框模式、平铺模式。
- 对繁琐组件进行处理，eg：日期组件对日期字符串和时间戳自动进行 moment 类型转换。
- 扩展性强，可以支持 antd 所有 form 组件和属性。

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

| 名称         | 说明                                                                         | 类型                                                    | 默认值       |
| ------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ |
| field        | 表单字段，用于提交后台                                                       | string                                                  | null，必传   |
| label        | 字段展示名称                                                                 | string                                                  | null，必传   |
| initialValue | 默认值                                                                       |                                                         | null         |
| antProps     | 支持 AntD 控件自带的所有属性                                                 | eg：{ addonBefore: 'Http://' }                          | null         |
| required     | 是否必填                                                                     | boolean                                                 | true         |
| type         | 控件类型                                                                     | 具体描述在下方                                          | 'Input'      |
| options      | type=Radio、Select、Checkbox 时，选项数组                                    | [{ label: '男', value:'1' },{ label: '女', value:'2' }] | null         |
| component    | type=Custom 时，传入的自定义组件。组件接受的 props 属性：value 和 onChange。 | `<CustomComponent>`                                     | null         |
| format       | type=DatePicker 或者 RangePicker 时，日期格式                                | string                                                  | 'YYYY-MM-DD' |

## 控件类型 ‘type’ 说明

- 组件内部已经封装好'Checkbox', 'RangePicker', 'DatePicker','Radio', 'Select', 'InputNumber', 'Custom', 'Input'
- 'Custom'为自定义组件类型
- 通过 type='Custom'，component 传入组件实例，理论上支持所有控件

## 使用

详细使用请查看 demo 文件夹。

## 有问题？加入我们

QQ 群：684950903（前端开源社区）
