// import './create.module.css';
import styles from './create.module.css';

export default function Layout({children}){
  return(
    <>
      <h2 className={styles.title}>Create Form</h2>
      {children}
    </>
  )
}