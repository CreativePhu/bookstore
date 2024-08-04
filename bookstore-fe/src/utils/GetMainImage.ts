import {BookImageInterface} from "../interfaces/BookServiceInterfaces";

export const getMainImage = (images: BookImageInterface[]) => {
    if (images.length === 0) return null;
    return images.find((image) => image.mainImage);
}