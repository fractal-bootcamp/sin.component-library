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

  const initialClassesBtn = [styles.button, styles[style], styles[size]];
  if (iconPosition === 'right') initialClassesBtn.push(styles.reverse);
  if (loading) initialClassesBtn.push(styles.loading);
  const finalClassesBtn = initialClassesBtn.join(' ');
  const htmlButtonProps = {
    className: finalClassesBtn,
    onClick,
    disabled: disabled || loading,
    title: tooltip
  };

  const iconElementClassNames = [styles.icon, styles[size]];
  if (disabled || loading) iconElementClassNames.push(styles.disabled);
  const iconElementClassName = iconElementClassNames.join(' ');
  const iconElement = iconUrl ? <img className={iconElementClassName} src={iconUrl}/> : <></>

  return (
    <>
      <button {...htmlButtonProps}>{iconElement}{children ?? text}</button>
    </>
  )
};

export default Button;