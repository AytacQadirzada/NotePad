import React from 'react'
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    footer: {
    textAlign: 'center',
    padding: '20px',
    fontSize: '20px',
    fontFamily: 'sans-serif'
    },
})
const Footer = () => {
    const classes = useStyles();
  return (
    <div>
        <footer className={classes.footer}>
            <p>Aytac Gadirzada NotePad &copy; 2025</p>
        </footer>
    </div>
  )
}

export default Footer