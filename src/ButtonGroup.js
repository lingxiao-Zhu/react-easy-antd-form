import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'antd';
import { isPromise } from './_utils';

const FormItem = Form.Item;

class ButtonGroup extends React.PureComponent {
  state = {
    loading: false
  };

  onOk = () => {
    const { formInstance } = this.props;

    const reslutPromise = formInstance.current.handleSubmit();

    reslutPromise.then(
      (res) => {
        // 判断外部onSubmit是否是promise
        const { onSubmit } = this.props;
        const Q = onSubmit(res);

        if (isPromise(Q)) {
          this.setState({
            loading: true
          });

          Q.then(() => {
            this.setState({
              loading: false
            });
          });
        }
      },
      (err) => {
        console.warn(err);
      }
    );
  };

  render() {
    const { loading } = this.state;
    const { type, onCancel } = this.props;

    // 是否使用formItem包裹button，modal模式不需要
    const isFormItem = type === 'formItem';

    const confirmBtn = (
      <Button onClick={this.onOk} type="primary" loading={loading}>
        确认
      </Button>
    );

    const otherBtn = (
      <Button onClick={onCancel} disabled={loading}>
        {isFormItem ? '重置' : '取消'}
      </Button>
    );

    return (
      <React.Fragment>
        {isFormItem ? (
          <React.Fragment>
            <FormItem>{otherBtn}</FormItem>
            <FormItem>{confirmBtn}</FormItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {otherBtn}
            {confirmBtn}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

ButtonGroup.propTypes = {
  type: PropTypes.string,
  formInstance: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

ButtonGroup.defaultProps = {
  type: 'formItem',
  onSubmit: () => {},
  onCancel: () => {}
};

export default ButtonGroup;
