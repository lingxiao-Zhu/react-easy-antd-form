import React from 'react';
import { isPromise } from '../_utils';

const value = {
  FormInstance: null,
  confirmLoading: true,
  onSubmit: null,
  onOk() {
    const reslutPromise = value.FormInstance.current.handleSubmit();

    reslutPromise.then(
      (res) => {
        const Q = value.onSubmit(res);

        if (isPromise(Q)) {
          value.confirmLoading = true;

          Q.then(() => {
            value.confirmLoading = false;
          });
        }
      },
      (err) => {
        console.warn(err);
      }
    );
  }
};

const { Provider, Consumer } = React.createContext({});

export { Provider, Consumer };
