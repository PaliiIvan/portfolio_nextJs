import { WithChildren } from '../../helpers/types/functional-component.type';
import style from './navigation-item.module.scss';
import cn from 'classnames';

export type NavigationItemProps = {
  onClick(): void;
  isActive: boolean;
} & WithChildren;

export const NavItem: React.FC<NavigationItemProps> = ({ children, isActive, onClick }) => {
  return (
    <div onClick={onClick} className={cn(style.nav_item, { [style.active]: isActive })}>
      <div className={style.border_top}></div>
      {children}
      <div className={style.border_bottom}></div>
    </div>
  );
};
