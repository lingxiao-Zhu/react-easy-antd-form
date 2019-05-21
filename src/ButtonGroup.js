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

    const resQ = formInstance.current.handleSubmit();

    resQ.then(
      (res) => {
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
    const isSearch = mode === 'search';

    const confirmBtn = (
      <Button onClick={this.onOk} type="primary" loading={loading}>
        {isSearch ? '搜索' : '确认'}
      </Button>
    );

    const otherBtn = (
      <Button onClick={onCancel} disabled={loading} style={{ marginRight: 10 }}>
        {isSearch ? '重置' : '取消'}
      </Button>
    );

    return (
      <React.Fragment>
        {isSearch ? (
          <React.Fragment>
            <FormItem>{confirmBtn}</FormItem>
            <FormItem>{otherBtn}</FormItem>
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
  mode: PropTypes.string,
  formInstance: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

ButtonGroup.defaultProps = {
  mode: 'default',
  onSubmit: () => {},
  onCancel: () => {}
};

export default ButtonGroup;
