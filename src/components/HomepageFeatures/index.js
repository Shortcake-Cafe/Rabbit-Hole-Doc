import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


function Feature() {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <div>
          <p>Rabbit Hole is made entirely in scratch, which means it's fairly simply to mod.</p>
          <p>So simple in fact, that you can even <b>mod the game in your browser!</b></p>
        </div>
        <div>
          <p>This documentation will go over the basics. This won't be the most detailed thing but it'll help you find your way around the code!</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature></Feature>
        </div>
      </div>
    </section>
  );
}
