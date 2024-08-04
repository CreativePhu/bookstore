import {formatVND} from "./FormartPrice";

export const getDiscountPrice = (price: number, discount: number) => {
    return formatVND(price - price * discount / 100);
}