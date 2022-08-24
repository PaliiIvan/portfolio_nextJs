import React, { FC, useEffect, useRef } from 'react';
import { WithChildren } from '../../helpers/types/functional-component.type';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import style from './page-wrapper.module.scss';

const PageWrapper: FC<WithChildren> = ({ children }) => {
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerDiv = pointerRef.current;

    if (!pointerDiv) {
      return;
    }

    const { width } = pointerDiv.getBoundingClientRect();
    const difSize = width / 2;
    const mouseMoveTrack = ({ clientX, clientY }: MouseEvent) => {
      pointerDiv.style.transform = `translate(${clientX - difSize}px, ${clientY - difSize}px)`;
    };

    if (pointerDiv) {
      window.addEventListener('mousemove', mouseMoveTrack);
    }
    return () => {
      window.removeEventListener('mousemove', mouseMoveTrack);
    };
  }, []);

  return (
    <div className={style.page_wrapper}>
      <div ref={pointerRef} className={style.pointer}>
        <div className={style.inner_circle}></div>
      </div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default PageWrapper;
