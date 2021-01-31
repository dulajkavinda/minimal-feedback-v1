import React from 'react'
import styles from './styles.module.css'
import CloseIcon from '@material-ui/icons/Close'
export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      Example Component <CloseIcon />: {text}
    </div>
  )
}
