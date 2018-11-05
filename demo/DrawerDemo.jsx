/**
 * Drawer Component Demo for uxcore
 * @author kewenlei
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Drawer from '../src';
import '../style';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Drawer
          visible={visible}
          title="抽屉组件"
          size="small"
          placement="left"
        />
      </div>
    );
  }
}

export default Demo;
