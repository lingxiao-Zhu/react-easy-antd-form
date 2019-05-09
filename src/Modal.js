/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import { isPromise } from './_utils';

class MyModal extends PureComponent {
  state = {
    confirmLoading: false
  };

  onOk = () => {
    const { FormInstance } = this.props;

    const reslutPromise = FormInstance.current.handleSubmit();

    reslutPromise.then(
      (res) => {
        // 判断外部onSubmit是否是promise
        const { onSubmit } = this.props;
        const Q = onSubmit(res);

        if (isPromise(Q)) {
          this.setState({
            confirmLoading: true
          });

          Q.then(() => {
            this.setState({
              confirmLoading: false
            });
          });
        }
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  onCancel = () => {
    const { onCancel } = this.props;

    if (onCancel && typeof onCancel === 'function') {
      onCancel();
    } else {
      console.error('modal模式下，请传入onCancel事件');
    }
  };

  render() {
    const { confirmLoading } = this.state;

    const { title, visible, children } = this.props;

    return (
      <Modal
        title={title}
        visible={visible}
        cancelText="取消"
        okText="确认"
        destroyOnClose
        maskClosable={false}
        confirmLoading={confirmLoading}
        onOk={this.onOk}
        onCancel={this.onCancel}
      >
        {children}
      </Modal>
    );
  }
}

MyModal.propTypes = {
  FormInstance: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default MyModal;
