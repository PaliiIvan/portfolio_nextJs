import { FC } from '../../helpers/types/functional-component.type';
import styles from './divider.module.scss';
import cn from 'classnames';

export const Divider: FC = ({ children, className }) => (
  <div className={cn(className, styles.divider)}>
    <div className={styles.left}></div>
    {children}
    <div className={styles.right}></div>
  </div>
);
