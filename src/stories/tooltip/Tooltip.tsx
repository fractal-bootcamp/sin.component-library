import { MouseEvent, PropsWithChildren, useEffect, useState } from "react";
import styles from './tooltip.module.sass';

export interface TooltipProps {
  focused: boolean;  // Whether or not the parent is receiving focus
  position?: 'top' | 'right' | 'bottom' | 'left';
  text?: string;
  maxWidth?: number
  delay?: number;  // milliseconds
}
export default function Tooltip(props: PropsWithChildren<TooltipProps>) {
  const {
    children,
    position = 'bottom',
    text = '',
    maxWidth = 360,
    delay = 500,
    focused = false,
  } = props;

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(focused);
    }, delay);

    return () => clearTimeout(timeout);
  }, [focused]);

  // Div props
  const classNameArray = [styles.tooltip, styles[position]];
  if (visible) classNameArray.push(styles.visible);
  const className = classNameArray.join(' ');
  const style = {maxWidth};
  const onMouseOver = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();
  const divProps = { className, style, onMouseOver };

  return (
    <div {...divProps}>
      {children ?? text}
    </div>
  )
}