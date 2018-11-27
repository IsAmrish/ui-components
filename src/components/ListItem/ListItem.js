import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '../../theme/selectors';

const Container = styled.div`
  display: flex;
  position: relative;
  padding: ${spacing('small')} ${spacing('base')};

  ${props =>
    props.active &&
    `
    background-color: ${props.theme.colors.gray50};
  `};
`;

const Link = Container.withComponent('a');

const Icon = styled.span`
  margin-right: ${spacing('small')};
`;

const Content = styled.div`
  flex-direction: column;
  width: 100%;
`;

const Subtext = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  opacity: 0.5;
`;

/**
 * A list item component that can be used for or showing off summary details about something!
 *
 * ```javascript
 * export default function ListItemExample({ clickHandler }) {
 *   const onClick = () => clickHandler('onClick', 'clicked it');
 *   return (
 *     <div>
 *       <ListItem
 *         onClick={onClick}
 *         text="Item 1"
 *         />
 *       <ListItem
 *         onClick={onClick}
 *         text="Item 2"
 *         subText="Where do you go to?"
 *         />
 *     </div>
 *   );
 * }
 * ```
 */
class ListItem extends React.Component {
  handleClick = ev => {
    ev.preventDefault();
    const { onClick, value } = this.props;
    if (onClick) {
      onClick(value);
    }
  };

  render() {
    const {
      active,
      text,
      subText,
      onClick,
      children,
      style,
      leftIcon,
    } = this.props;
    const BaseTag = onClick ? Link : Container;
    const props = onClick && { href: '#' };
    return (
      <BaseTag
        style={style}
        active={active}
        onClick={this.handleClick}
        {...props}
      >
        {leftIcon && <Icon>{leftIcon}</Icon>}
        <Content>
          {text && <div>{text}</div>}
          {children}
          {subText && <Subtext>{subText}</Subtext>}
        </Content>
      </BaseTag>
    );
  }
}

ListItem.propTypes = {
  active: PropTypes.bool,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.object,
  subText: PropTypes.node,
  text: PropTypes.node,
  value: PropTypes.node,
};

ListItem.defaultProps = {
  active: false,
  leftIcon: null,
  onClick: null,
  style: {},
  subText: '',
  text: '',
  value: '',
};

export default ListItem;
