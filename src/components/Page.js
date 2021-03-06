// @flow
import * as React from 'react';
import * as PropTypes from 'prop-types';
import StyleSheet from '../stylesheet';
import PageStylePropTypes from './PageStylePropTypes';

// $FlowFixMe
export default class Page extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.oneOfType([
      PropTypes.shape({ ...PageStylePropTypes }),
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.shape({ ...PageStylePropTypes }), PropTypes.number]),
      ),
      PropTypes.number,
    ]),
  };

  render() {
    const {
      name, children, style, ...otherProps
    } = this.props;
    const _name = name === 'Symbols' ? 'Symbols (renamed to avoid conflict)' : name;
    const _style = StyleSheet.flatten(style);

    return (
      <page name={_name} style={_style} {...otherProps}>
        {children}
      </page>
    );
  }
}
