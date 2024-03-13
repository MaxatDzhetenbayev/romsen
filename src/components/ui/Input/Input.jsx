import styles from './Input.module.css'
export const Input = ({classNames, ...props}) => {
  return (
    <input className={[styles.input, ...classNames].join(' ')} {...props}/>
  )
}
