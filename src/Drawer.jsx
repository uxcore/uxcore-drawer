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
import Dialog from 'uxcore-dialog';

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
      className,
      size,
      width,
      prefixCls,
      ...props
    } = this.props;
    const placementStr = this.firstUpperCase(placement);

    const commonProps = {
      width: this.handleWidth(),
      transitionName: `dialogSlide${placementStr}`,
      ...props,
    };
    commonProps.footer = null;

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
    const {
      prefixCls, className, placement, title,
    } = props;
    const classNames = classnames(className, {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${placement}`]: true,
      [`${prefixCls}-hastitle`]: !!title,

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
  onCancel: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.oneOf(['small', 'normal']),
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
};
export default Drawer;
