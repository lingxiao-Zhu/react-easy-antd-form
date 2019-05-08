import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import { typeConvertion, config } from './_utils';

const FormItem = Form.Item;

class MyForm extends PureComponent {
  renderFormItem = (item, getFieldDecorator) => (
    <FormItem key={item.label} label={item.label}>
      {getFieldDecorator(item.field, config(item))(typeConvertion(item))}
    </FormItem>
  );

  handleSubmit = (e) => {
    e && typeof e === 'object' && e.preventDefault();

    const { form } = this.props;

    return new Promise((resove, reject) => {
      form.validateFields((err, fieldsValue) => {
        if (err) {
          reject(new Error('请将信息填写完整'));
        }
        resove(fieldsValue);
      });
    });
  };

  render() {
    const { fields, form, layout } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form onSubmit={this.handleSubmit}>
        {layout === 'vertical' ? (
          fields.map(item => this.renderFormItem(item, getFieldDecorator))
        ) : (
          <Row type="flex" gutter={30}>
            {fields.map((item, index) => (
              <Col key={index} xs={24} sm={8} xl={6}>
                {this.renderFormItem(item, getFieldDecorator)}
              </Col>
            ))}
          </Row>
        )}
      </Form>
    );
  }
}

MyForm.propTypes = {
  form: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired,
};

const HocForm = Form.create()(MyForm);

HocForm.propTypes = {
  form: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  layout: PropTypes.string,
};

HocForm.defaultProps = {
  layout: 'vertical', // "vertical", "horizental"
};

export default HocForm;
