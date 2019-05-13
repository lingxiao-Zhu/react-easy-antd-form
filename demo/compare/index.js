import React from 'react';
import Form from './form';
import FormAntd from './form.antd';

class index extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Form />
        <br />
        <br />
        <FormAntd />
      </div>
    );
  }
}

export default index;
