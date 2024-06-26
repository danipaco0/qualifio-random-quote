import Button from 'react-bootstrap/Button';
import { IButton } from "./props";

const NextButton = ({onClick, isLoading}: IButton): JSX.Element => {

    return(
        <Button
            variant="primary "
            onClick={onClick}
            disabled={isLoading}
            className="mt-4"
        >
            {isLoading ? 'Loading...' : 'Next quote'}
        </Button>
    )
}

export default NextButton;