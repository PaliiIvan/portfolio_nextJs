import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import cn from 'classnames';
import { FC } from '../../helpers/types/functional-component.type';
import { CloseIcon } from '../close-icon/close-icon';
import styles from './contact-me-bar.module.scss';
import { Divider } from '../divider/divider';

export type ContactBeBarType = {
  isActive: boolean;
  onClose(): void;
};

export const ContactMeBar: FC<ContactBeBarType> = ({ isActive, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      if (isActive) {
        gsap.to(container, {
          duration: 1,
          yoyo: true,
          right: 0,
        });
      } else {
        gsap.to(container, {
          duration: 1,
          yoyo: true,
          right: `-${styles.width}`,
        });
      }
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className={cn(styles.contact_me_bar)}>
      <div onClick={onClose}>
        <CloseIcon />
      </div>
      <form>
        <div className={styles.input_group}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="text"></input>
        </div>

        <div className={styles.input_group}>
          <label className={styles.label}>Message</label>
          <textarea className={cn(styles.input)} rows={5}></textarea>
        </div>

        <button type="submit" className={styles.send_btn}>
          Send message
        </button>
      </form>
      <Divider className={styles.divider}>OR</Divider>
    </div>
  );
};
