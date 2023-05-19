import Button from 'react-bootstrap/Button';

export default function ButtonConponent({ text, color}) {
    return(
        <Button variant={color}>{text}</Button>
    )
}