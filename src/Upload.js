import React, { Component } from "react";
import { Upload, Icon, Button } from "antd";

const uploadButton = (
  <Button>
    <Icon type="upload" /> 点击上传
  </Button>
);

class MyUpload extends Component {
  render() {
    return <Upload listType="picture">{uploadButton}</Upload>;
  }
}

export default MyUpload;
