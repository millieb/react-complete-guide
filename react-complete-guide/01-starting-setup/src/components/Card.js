import './Card.css';

function Card(props){
    // Making sure that any value set on the class named prop is added
    // to this long string of class names
    const classes = 'card ' + props.className;
    // which is set on this div instead of the card
    return <div className={classes}>{props.children}</div>;
}

export default Card;