import styles from './button.module.sass';

interface ButtonProps {
  style?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  children?: string;
  width?: number;
  height?: number;
  icon?: string;
  iconPosition?: 'left' | 'right'
  iconWidth?: number;
  iconHeight?: number;
};
const Button = (props: ButtonProps) => {
  const {
    children,
    style = 'primary',
    size = 'medium',
    text = 'Button',
    disabled = false,
    loading = false,
    onClick,
    height,
    width,
    tooltip,
    icon,
    iconPosition = 'left',
    iconWidth,
    iconHeight,
  } = props;

  const htmlButtonClassNames = [styles.button, styles[style], styles[size]];
  if (iconPosition === 'right') htmlButtonClassNames.push(styles.reverse);
  if (loading) htmlButtonClassNames.push(styles.loading);
  const htmlButtonClassName = htmlButtonClassNames.join(' ');
  const htmlButtonProps = {className: htmlButtonClassName, onClick, disabled: disabled || loading, title: tooltip};
  const htmlButtonStyle = {width: width ? width : undefined, height: height ? height : undefined};

  const iconElementClassNames = [styles.icon, styles[size]];
  if (disabled || loading) iconElementClassNames.push(styles.iconDisabled);
  const iconElementClassName = iconElementClassNames.join(' ');
  const iconElementStyle = {width: iconWidth ? iconWidth : undefined, height: iconHeight ? iconHeight : undefined}
  const iconElement = icon ? <img className={iconElementClassName} style={iconElementStyle} src={icon}/> : <></>

  return (
    <>
      <button {...htmlButtonProps} style={htmlButtonStyle}>{iconElement}{children ?? text}</button>
    </>
  )
};

export default Button;