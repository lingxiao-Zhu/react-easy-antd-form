/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Modal from './Modal';

class EasyAntdForm extends React.Component {
  _formInstance = React.createRef();

  render() {
    const { mode, fields, ...otherProps } = this.props;

    const _form = (
      <Form
        wrappedComponentRef={this._formInstance}
        fields={fields}
        mode={mode}
      />
    );

    return mode === 'modal' ? (
      <Modal {...otherProps} FormInstance={this._formInstance}>
        {_form}
      </Modal>
    ) : (
      _form
    );
  }
}

EasyAntdForm.propTypes = {
  fields: PropTypes.array.isRequired,
  mode: PropTypes.string,
  onSubmit: PropTypes.func,
  // 下面的属性都是modal模式下独有的
  title: PropTypes.string,
  visible: PropTypes.bool,
  onCancel: PropTypes.func
};

EasyAntdForm.defaultProps = {
  mode: 'default', // default, modal, search, plain
  onSubmit: null, // modal模式必须传；其他模式下，如果传了，组件内就会显示button；如果onSubmit是promise，button会自动管理loading效果
  // 下面的属性都是modal模式下独有的
  title: 'form提交',
  visible: false,
  onCancel: null
};

export default EasyAntdForm;
