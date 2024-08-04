export const formatVND = (price: number) => {
  return price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
}