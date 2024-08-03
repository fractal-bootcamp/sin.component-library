import { useState } from "react";
import styles from './accordion.module.sass';

type AccordionProps = {
  header: string;
  content: string | AccordionProps[];
}

function parseContent(content: string | AccordionProps[]): React.ReactNode {
  if (typeof content === 'string') return <p>{content}</p>
  else return content.map(x => <Accordion {...x} />);
}

export default function Accordion(props: AccordionProps) {
  const {header, content} = props;

  const [open, setOpen] = useState<boolean>(false);

  const contentDivClassName = [styles.content, open && styles.open].filter(x => Boolean(x)).join(' ');
  const spinnerDivClassName = [styles.spinner, open && styles.open].filter(x => Boolean(x)).join(' ');

  function onHeaderClick() {
    setOpen(!open);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={onHeaderClick}>
        <div className={spinnerDivClassName}>
          {/* TODO: Replace with a proper icon to allow centered origin for rotation */}
          {'>'}
        </div>
        {header}
      </div>
      <div className={contentDivClassName}>
        {parseContent(content)}
      </div>
    </div>
  )
}