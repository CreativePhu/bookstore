import React from "react";
import {Container, Image} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

interface ListImagesProductInf {
    name: string;
    image: string;
}

enum ScrollStatus {
    LEFT = "left",
    RIGHT = "right",
    NONE = "none"
}

const ListImagesProduct: ListImagesProductInf[] = [
    {
        name: "Đồ Chơi Vận Động",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/banhbong.jpg"
    },
    {
        name: "Stem - Steam",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Huyen-KD/image_213680-removebg-preview.png"
    },
    {
        name: "Đồ Chơi Lắp Ráp",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/5702017584461-_1_.jpg"
    },
    {
        name: "Bé Khỏe - Ba Mẹ Thảnh Thơi",
        image: "https://cdn0.fahasa.com/media/wysiwyg/tuan-test-css/nuoi-con-khong-phai-cuoc-chien_resize100.jpg"
    },
    {
        name: "Đam Mỹ",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/2345x100.png"
    },
    {
        name: "Văn Học",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/gocnhoconang100x100.jpg"
    },
    {
        name: "Tâm Lý - Kỹ Năng",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/atomichabit100x100.jpg"
    },
    {
        name: "Thiếu Nhi",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/8935244874389.jpg"
    },
    {
        name: "Sách Học Ngoại Ngữ",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/240715/hsk100x100.jpg"
    },
    {
        name: "Ngoại Văn",
        image: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/ngoai-van-t1-24(1).jpg"
    }
]

const ItemProductPortfolio: React.FC<ListImagesProductInf> = ({name, image}) => {
    return (
        <div className={"flex-grow-1"} style={{flexBasis: "100px"}}>
            <a className={"text-decoration-none"} href={image}>
                <Image src={image} alt={name} width={100} loading={"lazy"} height={100} rounded/>
                <p className={"text-center text-secondary mb-0 mt-3"}>{name}</p>
            </a>
        </div>
    )
}

const ListItemsProductPortfolio: React.FC = () => {

    const listItemsProductPortfolioRef = React.useRef<HTMLDivElement | null>(null);
    const [scrollStatus, setScrollStatus] = React.useState<ScrollStatus>(ScrollStatus.LEFT);

    const handleScrollLeft = () => {
        if (listItemsProductPortfolioRef.current) {
            listItemsProductPortfolioRef.current.scrollBy({
                left: -listItemsProductPortfolioRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }

    const handleScrollRight = () => {
        if (listItemsProductPortfolioRef.current) {
            listItemsProductPortfolioRef.current.scrollBy({
                left: listItemsProductPortfolioRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }

    React.useEffect(() => {
        const handleScroll = () => {
            if (listItemsProductPortfolioRef.current) {
                const { scrollLeft, scrollWidth, offsetWidth } = listItemsProductPortfolioRef.current;
                if (scrollLeft === 0) {
                    setScrollStatus(ScrollStatus.LEFT);
                } else if (scrollLeft + offsetWidth >= scrollWidth) {
                    setScrollStatus(ScrollStatus.RIGHT);
                }else{
                    setScrollStatus(ScrollStatus.NONE);
                }
            }
        };

        const currentRef = listItemsProductPortfolioRef.current;

        if (currentRef) currentRef.addEventListener('scroll', handleScroll);

        return () => {
            if (currentRef) currentRef.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <div className={"position-relative"}>
            <div ref={listItemsProductPortfolioRef}
                 className={"d-flex flex-row justify-content-between py-3 px-3 gap-4 gap-xl-2 overflow-x-scroll hiden-scroll"}>
                {
                    ListImagesProduct.map((item, index) => {
                        return (
                            <ItemProductPortfolio key={index} name={item.name} image={item.image}/>
                        );
                    })
                }
            </div>
            <div className={`position-absolute top-50 start-0 translate-middle ${scrollStatus !== ScrollStatus.LEFT ? "d-block" : "d-none"} d-xl-none`}>
                <div
                    onClick={() => {
                        handleScrollLeft();
                    }}
                    className={"book-new-button-left rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                    style={{width: "30px", height: "30px"}}>
                    <Icon.ChevronLeft size={15}/>
                </div>
            </div>
            <div className={`position-absolute top-50 start-100 translate-middle ${scrollStatus !== ScrollStatus.RIGHT ? "d-block" : "d-none"} d-xl-none`}>
                <div
                    onClick={() => {
                        handleScrollRight();
                    }}
                    className={"book-new-button-right rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                    style={{width: "30px", height: "30px"}}>
                    <Icon.ChevronRight size={15}/>
                </div>
            </div>
        </div>
    )
}

const LabelProductPortfolio: React.FC = () => {
    return (
        <>
            <div className={"d-flex justify-content-start align-items-center gap-3 py-3 px-3"}>
                <Icon.BasketFill className={"text-danger"} size={25}/>
                <h4 className={"text-center mb-0"}>Danh mục sản phẩm</h4>
            </div>
            <div className={"mx-4"} style={{backgroundColor: "#F2F4F5", height: "1px"}}></div>
        </>
    )
}

export const ProductPortfolio: React.FC = () => {
    return (
        <Container className={"py-3"}>
            <div className={"bg-white rounded"}>
                <LabelProductPortfolio/>
                <ListItemsProductPortfolio/>
            </div>
        </Container>
    );
}