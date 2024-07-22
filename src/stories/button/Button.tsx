import styles from './button.module.sass';

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  children?: string;
  iconUrl?: string;
  iconPosition?: 'left' | 'right',
  size?: 'lg' | 'md' | 'sm',
  style?: 'primary' | 'secondary' | 'tertiary';
};
const Button = (props: ButtonProps) => {
  const {
    children,
    text = 'Button',
    disabled = false,
    loading = false,
    style = 'primary',
    onClick,
    size = 'md',
    tooltip,
    iconUrl,
    iconPosition = 'left',
  } = props;

  // Constructing button props
  const classNameButtonArray = [styles.button, styles[style], styles[size]];
  if (iconPosition === 'right') classNameButtonArray.push(styles.reverse);
  if (loading) classNameButtonArray.push(styles.loading);
  const classNameButton = classNameButtonArray.join(' ');
  const htmlButtonProps = {
    className: classNameButton,
    onClick,
    disabled: disabled || loading,
    title: tooltip
  };

  // Constructing icon element
  const classNameIconArray = [styles.icon, styles[size]];
  if (disabled || loading) classNameIconArray.push(styles.disabled);
  const classNameIcon = classNameIconArray.join(' ');
  const iconElement = iconUrl ? <img className={classNameIcon} src={iconUrl}/> : <></>

  return (
    <>
      <button {...htmlButtonProps}>{iconElement}{children ?? text}</button>
    </>
  )
};

export default Button;