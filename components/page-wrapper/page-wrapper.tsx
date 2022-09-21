import React, { useEffect, useRef } from 'react';
import { FC } from '../../helpers/types/functional-component.type';
import { MousePointer } from '../mouse-icon/mouse-icon';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import style from './page-wrapper.module.scss';

const PageWrapper: FC = ({ children }) => {
  const pointerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={style.page_wrapper}>
      <MousePointer />
      <NavigationBar />
      {children}
    </div>
  );
};

export default PageWrapper;
