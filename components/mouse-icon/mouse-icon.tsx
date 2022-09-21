import { useEffect, useRef } from 'react';
import styles from './mouse-icon.module.scss';

export const MousePointer = () => {
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
    <div ref={pointerRef} className={styles.pointer}>
      <div className={styles.inner_circle}></div>
    </div>
  );
};
