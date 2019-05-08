import React, { Component } from 'react';
import { Upload, Icon, Button } from 'antd';

const uploadButton = (
  <Button>
    <Icon type="upload" />
    <span> 点击上传</span>
  </Button>
);

class MyUpload extends Component {
  state = {};

  render() {
    return <Upload listType="picture">{uploadButton}</Upload>;
  }
}

export default MyUpload;
