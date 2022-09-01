import { useEffect, useRef } from 'react';
import { FC } from '../../helpers/types/functional-component.type';
import styles from './close-icon.module.scss';
import gsap from 'gsap';

const animateCrossIcon = (container: HTMLDivElement) => {
  const tmTop = gsap.timeline({ delay: 1 });
  const tmBottom = gsap.timeline({ delay: 1 });

  tmTop
    .to(container.childNodes[0], {
      duration: 1,
      yoyo: true,
      top: '50%',
    })
    .to(container.childNodes[0], {
      rotate: 45,
      duration: 1,
    });

  tmBottom
    .to(container.childNodes[1], {
      duration: 1,
      yoyo: true,
      top: '50%',
    })
    .to(container.childNodes[1], {
      rotate: -45,
      duration: 1,
    });
};

export const CloseIcon: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      animateCrossIcon(container);
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  );
};
