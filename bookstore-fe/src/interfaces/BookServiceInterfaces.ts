export interface BookImageInterface {
    "imageId": number,
    "imageUrl": string,
    "mainImage": boolean
}

export interface BookPublisherInterface {
    "publisherId": number,
    "publisherName": string
}

export interface BookInterface {
    "bookId": number,
    "bookName": string,
    "bookDescription": string,
    "bookPrice": number
    "bookDiscount": number
    "bookQuantity": number
    "authors": [],
    "categories": [],
    "publisher": BookPublisherInterface,
    "images": BookImageInterface[]
}

export interface BookPageInterface {
    books: BookInterface[],
    "totalPages": number,
    "totalElements": number,
    "currentPage": number,
    "pageSize": number
}