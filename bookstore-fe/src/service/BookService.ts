import axios from 'axios';
import {BookPageInterface} from "../interfaces/BookServiceInterfaces";

const HOST_BE = process.env.REACT_APP_HOST_BE;

interface GetBooksProps {
    page?: number;
    size?: number;
}

export const GetBooks = async ({page = 0, size = 10}: GetBooksProps = {}): Promise<BookPageInterface> => {
    try {
        const response = await axios.get(`${HOST_BE}/books?page=${page}&size=${size}`);
        return response.data;
    }catch (error){
        console.error('Error fetching books:', error);
        throw error;
    }
}