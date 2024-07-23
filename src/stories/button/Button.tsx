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
  const classNameButton = [
    styles.button, styles[style], styles[size],
    iconPosition === 'right' && styles.reverse,
    loading && styles.loading
  ].filter(x => x !== false)
    .join(' ');
  const htmlButtonProps = {
    className: classNameButton,
    onClick,
    disabled: disabled || loading,
    title: tooltip
  };

  // Constructing icon element
  const classNameIcon = [
    styles.icon, styles[size],
    (disabled || loading) && styles.disabled
  ].filter(x => x !== false)
    .join(' ');
  const iconElement = iconUrl ? <img className={classNameIcon} src={iconUrl}/> : null;

  // Constructing loader element
  const classNameLoader = `${styles.loader} ${styles[size]}`;
  const loaderElement = loading ? <span className={classNameLoader} /> : null;

  return (
    <div>
      <button {...htmlButtonProps}>{iconElement}{children ?? text}</button>
      {loaderElement}
    </div>
  );
};

export default Button;