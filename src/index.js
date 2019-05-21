/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Modal from './Modal';
import ButtonGroup from './ButtonGroup';

class EasyForm extends React.Component {
  _formInstance = React.createRef();

  render() {
    // eslint-disable-next-line object-curly-newline
    const {
      mode,
      isModal,
      fields,
      onSubmit,
      modalWidth,
      ...otherProps
    } = this.props;

    // 只有onSubmit事件存在，才显示按钮
    const _footer = onSubmit && (
      <ButtonGroup
        formInstance={this._formInstance}
        onSubmit={onSubmit}
        mode={mode}
      />
    );

    const _form = (
      <Form
        wrappedComponentRef={this._formInstance}
        fields={fields}
        mode={mode}
        footer={isModal ? null : _footer}
      />
    );

    return isModal ? (
      <Modal {...otherProps} modalWidth={modalWidth} footer={_footer}>
        {_form}
      </Modal>
    ) : (
      _form
    );
  }
}

EasyForm.propTypes = {
  fields: PropTypes.array.isRequired,
  mode: PropTypes.string,
  isModal: PropTypes.bool,
  onSubmit: PropTypes.func,
  // 下面的属性都是modal模式下独有的
  title: PropTypes.string,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  modalWidth: PropTypes.number
};

EasyForm.defaultProps = {
  mode: 'default', // default, search, plain
  isModal: false, // 是否是弹窗模式
  onSubmit: null, // modal模式必须传；其他模式下，如果传了，组件内就会显示button；如果onSubmit是promise，button会自动管理loading效果
  // 下面的属性都是modal模式下独有的
  modalWidth: 520, // modal宽度
  title: 'form提交',
  visible: false,
  onCancel: null
};

export default EasyForm;
