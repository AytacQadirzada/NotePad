import { createUseStyles } from "react-jss";
// import { CSSProperties } from "react";
// interface Styles {
//     container: CSSProperties;
//     title: CSSProperties;
//     item: CSSProperties;
//   }
const useStyles = createUseStyles({
    main: {
        minHeight: '72vh',
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        gap: '20px',
    },
    colorButtons:{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
    },
    buttons:{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        width: '400px',
    },
    saveButton:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7E57C2',
        border: '1px solid #7E57C2',
        borderRadius: '5px',
        marginTop: '3px',
        height: '35px',
        width: '70px',
        '& button': {
            backgroundColor: '#7E57C2',
            border: '1px solid #7E57C2',
            borderRadius: '5px',
            height: '30px',
            width: '70px',
            color: 'white',
            fontSize: '18px',
            fontFamily: 'sans-serif',
        },
    },
    input : {
        width: '400px',
        height: '25px',
        borderRadius: '5px',
        border: '1px solid #7E57C2',
        padding: '5px',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        '&:focus': {
                outline: 'none',
            },
    },
    textarea: {
        width: '400px',
        maxHeight: '200px',
        maxWidth: '400px',
        minHeight: '200px',
        minWidth: '400px',
        height: '200px',
        borderRadius: '5px',
        border: '1px solid #7E57C2',
        padding: '5px',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        '&:focus': {
                outline: 'none',
            },
    },
    search:{
        width: '400px',
        height: '35px',
        borderRadius: '5px',
        border: '1px solid #7E57C2',
        padding: '5px',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        '& input': {
            width: '90%',
            borderRadius: '5px',
            border: 'none',
            padding: '5px',
            fontSize: '18px',
            fontFamily: 'sans-serif',
            '&:focus': {
                outline: 'none',
            },
        },
    },
    list:{
        width: '340px',
        height: '370px',
        borderRadius: '5px',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    listHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        color: 'white',
        '& div': {
            fontSize: '18px',
            fontFamily: 'sans-serif',
            fontWeight: '600',
        },
    },
    listBody:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        padding: '0 15px',
        fontSize: '15px',
        '& div': {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
        },
    },
    listContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        width: '80%',
        justifyContent: 'center',
    },
    

})
export default useStyles;