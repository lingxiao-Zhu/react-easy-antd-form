import React from 'react';
import PropTypes from 'prop-types';
import { isPromise } from './_utils';
import Form from './Form';
import Modal from './Modal';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      confirmLoading: false,
    };
  }

  onOk = () => {
    const reslutPromise = this.form.current.handleSubmit();

    reslutPromise.then((res) => {
      // 判断外部onSubmit是否是promise
      const { onSubmit } = this.props;
      const Q = onSubmit(res);

      if (isPromise(Q)) {
        this.setState({
          confirmLoading: true,
        });

        Q.then(() => {
          this.setState({
            confirmLoading: false,
          });
        });
      }
    });
  };

  render() {
    const {
 modal, title, visible, onCancel, ...otherProps 
} = this.props;
    const { confirmLoading } = this.state;

    return modal ? (
      <Modal
        title={title}
        visible={visible}
        onOk={this.onOk}
        onCancel={onCancel}
        confirmLoading={confirmLoading}
      >
        <Form wrappedComponentRef={this.form} {...otherProps} />
      </Modal>
    ) : (
      <Form {...this.props} />
    );
  }
}

Index.propTypes = {
  fields: PropTypes.array.isRequired,
  layout: PropTypes.string,
  title: PropTypes.string.isRequired,
  // 下面的属性都是modal模式下独有的
  modal: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

Index.defaultProps = {
  modal: false,
  layout: 'vertical', // "vertical", "horizental"
};

export default Index;
