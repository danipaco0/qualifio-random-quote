import { Quote } from "../../types/Quote";
import Card from "react-bootstrap/Card";

const TextContainer = ({content, author}: Quote): JSX.Element => {
    
    return(
        <Card style={{ width: '30rem' }}>
            <Card.Body className="d-flex flex-column">
                <Card.Text className="fst-italic">
                    "{content}"
                </Card.Text>
                <Card.Text className="text-end">
                    {author}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TextContainer;