import { Request, Response } from 'express';
import axios from 'axios';

const API_URL = 'https://api.quotable.io/quotes/random';

export const getQuote = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get(API_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quotes', error });
  }
};
