import PageWrapper from '../../components/page-wrapper/page-wrapper';
import { PageWithLayout } from '../_app';
import styles from './about.module.scss';
import { Yggdrasil, Horn } from '../../components/svg-components';
import { ContactMeBar } from '../../components/contact-me-bar/contact-me-bar';
import { useState } from 'react';

const AboutSection: PageWithLayout = () => {
  const [isContactBarPresent, setIsContactBarPresent] = useState(false);

  const onContactMeClick = () => {
    setIsContactBarPresent((state) => !state);
  };

  return (
    <div className={styles.about}>
      <div className={styles.lef_side}>
        <Yggdrasil />
      </div>
      <div className={styles.right_side}>
        <div className={styles.magic_sentence}>
          <span className={styles.word}>
            <span className={styles.char}>C</span>
            <span className={styles.char}>r</span>
            <span className={styles.char}>e</span>
            <span className={styles.char}>a</span>
            <span className={styles.char}>t</span>
            <span className={styles.char}>e</span>
            &nbsp;
          </span>
          <span className={styles.word}>
            <span className={styles.char}>m</span>
            <span className={styles.char}>a</span>
            <span className={styles.char}>g</span>
            <span className={styles.char}>i</span>
            <span className={styles.char}>c</span>
            &nbsp;
          </span>
          <span className={styles.word}>
            <span className={styles.char}>b</span>
            <span className={styles.char}>y</span>
            &nbsp;
          </span>
          <span className={styles.word}>
            <span className={styles.char}>t</span>
            <span className={styles.char}>y</span>
            <span className={styles.char}>p</span>
            <span className={styles.char}>i</span>
            <span className={styles.char}>n</span>
            <span className={styles.char}>g</span>
            &nbsp;
          </span>
          <span className={styles.word}>
            <span className={styles.char}>c</span>
            <span className={styles.char}>o</span>
            <span className={styles.char}>d</span>
            <span className={styles.char}>e</span>
            &nbsp;
          </span>
        </div>
        <div className={styles.hello_text}>
          Hello, my name is <span className="bold">Ivan</span> and this is my personal website. Here you can find a
          little information about my skills and my work experience.
        </div>
        <div className={styles.description_text}>
          Who am I? <br />I am a <span className="bold"> Front-End Developer </span>. I spend most of my time developing
          web services, writing code, planning application architecture, and writing tests.
          <br />
          In addition to all this, I am fond of 3D modeling and data visualization.
        </div>
        <div className={styles.contact_me}>
          <Horn onClick={onContactMeClick} className={styles.horn} />
          <div className={styles.contact_me_text}>Contact me!</div>
        </div>
      </div>
      <ContactMeBar onClose={onContactMeClick} isActive={isContactBarPresent} />
    </div>
  );
};

AboutSection.getLayout = (page) => <PageWrapper>{page}</PageWrapper>;

export default AboutSection;
