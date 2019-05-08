import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

class MyModal extends PureComponent {
  /**
   * props.onOk其实是form组件的handleSubmit
   */
  onOk = () => {
    const { onOk } = this.props;
    onOk();
  };

  render() {
    const {
 title, confirmLoading, visible, onCancel, children 
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
        {children}
      </Modal>
    );
  }
}

MyModal.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired, // 调用form的handlesubmit
  onCancel: PropTypes.func.isRequired
};

export default MyModal;
