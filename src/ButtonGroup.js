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
    const { mode, onCancel } = this.props;

    const confirmBtn = (
      <Button onClick={this.onOk} type="primary" loading={loading}>
        {mode === 'search' ? '搜索' : '确认'}
      </Button>
    );

    const otherBtn = (
      <Button onClick={onCancel} disabled={loading}>
        {mode === 'search' ? '重置' : '取消'}
      </Button>
    );

    return (
      <React.Fragment>
        {mode === 'modal' ? (
          <React.Fragment>
            {otherBtn}
            {confirmBtn}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormItem>{otherBtn}</FormItem>
            <FormItem>{confirmBtn}</FormItem>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

ButtonGroup.propTypes = {
  mode: PropTypes.string,
  formInstance: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

ButtonGroup.defaultProps = {
  mode: 'deafult',
  onSubmit: () => {},
  onCancel: () => {}
};

export default ButtonGroup;
