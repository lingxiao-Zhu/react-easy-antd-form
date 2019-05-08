import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

class MyModal extends PureComponent {
  /**
   * props.onOk其实是form组件的handleSubmit
   */
  onOk = () => {
    this.props.onOk();
  };

  render() {
    const {
      title, confirmLoading, visible, onCancel,
    } = this.props;

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
        onCancel={onCancel}
      >
        {this.props.children}
      </Modal>
    );
  }
}

MyModal.propTypes = {
  confirmLoading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired, // 调用form的handlesubmit
};

export default MyModal;
