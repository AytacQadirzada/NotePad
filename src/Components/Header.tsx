import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    header: {
        color: '#7E57C2',
        padding: '20px',
        fontSize: '35px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    span: {
        color: 'black',
    }
})
const Header = () => {
    const classes = useStyles();
  return (
    <div className={classes.header}>Note<span className={classes.span}>Pad</span></div>
  )
}

export default Header