interface ButtonProps {
  style?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  text?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  tooltip?: string;
  children?: string;
};
const Button = (props: ButtonProps) => {
  const {
    style = 'primary',
    size = 'medium',
    text = 'Button',
    disabled = false,
    // loading = false,
    onClick,
    // icon,
    // tooltip,
    children
  } = props;

  const className = ['button', style, size].join(' ');

  const htmlButtonProps = {className, onClick, disabled};

  return (
    <>
      <button {...htmlButtonProps}>{children ?? text}</button>
    </>
  )
};

export default Button;