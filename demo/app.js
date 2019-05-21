import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse } from 'antd';
import 'antd/dist/antd.min.css';

import DefaultMode from './defaultMode';
import ModalMode from './modalMode';
import SearchMode from './searchMode';
import PlainMode from './plainMode';

import Compare from './compare';

const { Panel } = Collapse;

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Collapse defaultActiveKey={['2']}>
          <Panel header="1.mode=default" key="1">
            <DefaultMode />
          </Panel>
          <Panel header="2.mode=search" key="2">
            <SearchMode />
          </Panel>
          <Panel header="3.mode=plain" key="3">
            <PlainMode />
          </Panel>
          <Panel header="4.isModal=true" key="4">
            <ModalMode />
          </Panel>
          <Panel
            header="5.antd 的form和 react-easy-antd-form 相同功能，代码量对比"
            key="5"
          >
            <Compare />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

const mountNode = document.getElementById('root');
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, mountNode);
