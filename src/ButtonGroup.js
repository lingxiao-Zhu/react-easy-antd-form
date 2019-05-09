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

    const confirmBtn = (
      <Button onClick={this.onOk} type="primary" loading={loading}>
        确认
      </Button>
    );

    return (
      <React.Fragment>
        {type === 'formItem' ? (
          <React.Fragment>
            <FormItem>
              <Button onClick={onCancel}>重置</Button>
            </FormItem>
            <FormItem>{confirmBtn}</FormItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button onClick={onCancel}>取消</Button>
            {confirmBtn}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

ButtonGroup.propTypes = {
  type: PropTypes.string.isRequired,
  formInstance: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ButtonGroup;
