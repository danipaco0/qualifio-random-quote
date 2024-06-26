import { useEffect, useState } from 'react';
import TextContainer from './components/text-container';
import NextButton from './components/button';
import { Quote } from './types/Quote';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  let test: Quote = {content: "I have walked that long road to freedom. I have tried not to falter; I have made missteps along the way. But I have discovered the secret that after climbing a great hill, one only finds that there are many more hills to climb. I have taken a moment here to rest, to steal a view of the glorious vista that surrounds me, to look back on the distance I have come. But I can only rest for a moment, for with freedom comes responsibilities, and I dare not linger, for my long walk is not ended.", author:"Nelson Mandela"};
  const [ quote, setQuote ] = useState<Quote>(test);
  const [ isButtonPressed, setIsButtonPressed ] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await fetchQuote();
    })();
  }, []);

  const fetchQuote = async (): Promise<void> => {
    setIsButtonPressed(true);
    const response = await axios.get(
      'http://localhost:5000/random',
    );

    setQuote({content: response.data.content, author: response.data.author});
    setIsButtonPressed(false);
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <TextContainer
        content={quote.content} 
        author={quote.author}
      />
      <NextButton 
        onClick={fetchQuote}
        isLoading={isButtonPressed}
      />
    </div>
  );
}

export default App;
