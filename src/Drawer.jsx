/**
 * Drawer Component for uxcore
 * @author kewenlei
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Dialog } from 'uxcore';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleWidth = this.handleWidth.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
  }

  handleOptions() {
    const {
      placement,
      prefixCls,
      showFooter,
      footer,
      className,
      size,
      width,
      ...props
    } = this.props;
    const placementStr = this.firstUpperCase(placement);

    const commonProps = {
      prefixCls,
      width: this.handleWidth(),
      transitionName: `dialogSlide${placementStr}`,
      ...props,
    };
    if (!showFooter) {
      commonProps.footer = null;
      return commonProps;
    }
    if (footer) {
      commonProps.footer = footer;
      return commonProps;
    }
    return commonProps;
  }

  handleWidth() {
    const { size, width } = this.props;
    if (width) {
      return width;
    }

    const widthMap = { small: 230, normal: 600 };
    return widthMap[size];
  }


  render() {
    const { props } = this;
    const { prefixCls, className, placement } = props;
    const classNames = classnames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${placement}`]: true,
      className,

    });
    const drawerOptions = this.handleOptions();
    return (
      <Dialog
        ref={(c) => { this.drawer = c; }}
        className={classNames}
        {...drawerOptions}
      />
    );
  }
}
Drawer.displayName = 'Drawer';
Drawer.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.oneOf(['small', 'normal']),
  showFooter: PropTypes.bool,
  footer: PropTypes.node,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  locale: PropTypes.string,
  wrapClassName: PropTypes.string,
  style: PropTypes.object,
  zIndex: PropTypes.number,
  placement: PropTypes.oneOf(['left', 'right']),
};
Drawer.defaultProps = {
  prefixCls: 'kuma-drawer',
  className: '',
  title: '',
  visible: false,
  size: 'normal',
  width: '',
  closable: true,
  maskClosable: true,
  locale: 'zh-cn',
  wrapClassName: '',
  style: {},
  zIndex: 1000,
  placement: 'right',
  showFooter: true,
};
export default Drawer;
