/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import {
 Button, Modal, Form, Input, DatePicker, InputNumber 
} from 'antd';

const FormItem = Form.Item;

class Index extends React.Component {
  state = {
    visible: false,
    loading: false
  };

  onSubmit = () => {
    const { form } = this.props;
    const { validateFields } = form;

    validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading: true
        });

        setTimeout(() => {
          // eslint-disable-next-line no-param-reassign
          values.birthday = values.birthday.format('YYYY-DD-MM'); // 格式化moment对象
          console.log(values);
          this.setState({
            loading: false
          });
        }, 1000);
      }
    });
  };

  onCancel = () => {
    this.setState({
      visible: false
    });
  };

  openModal = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const { visible, loading } = this.state;

    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div>
        <Button type="primary" onClick={this.openModal}>
          新增用户
        </Button>
        <Modal
          title="新增用户"
          okText="确认"
          cancelText="取消"
          onOk={this.onSubmit}
          onCancel={this.onCancel}
          confirmLoading={loading}
          visible={visible}
        >
          <Form>
            <FormItem label="名称">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请输入名称!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="年龄">
              {getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    message: '请输入年龄!'
                  }
                ]
              })(<InputNumber style={{ width: '100%' }} />)}
            </FormItem>
            <FormItem label="生日">
              {getFieldDecorator('birthday', {
                rules: [
                  {
                    required: true,
                    message: '请输入生日!'
                  }
                ]
              })(<DatePicker style={{ width: '100%' }} />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(Index);
