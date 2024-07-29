import React from "react";
import {Container, Image} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

interface ImageCategory {
    name: string;
    url: string;
}

enum ScrollStatus {
    LEFT = "left",
    RIGHT = "right",
    NONE = "none"
}

const listImages: ImageCategory[] = [
    {
        name: "Back to School",
        url: "https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/IconT7_Sale%20N%C4%83m%20H%E1%BB%8Dc%20M%E1%BB%9Bi_120x120.png"
    },
    {
        name: "First News",
        url: "https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/IconT7_Logo%20NCC_FirstNews_120x120.png"
    },
    {
        name: "Balo",
        url: "https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Icon_Balo_120x120.png"
    },
    {
        name: "Sản Phẩm Được Trợ Giá",
        url: "https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Icon_GiamGia_120x120.png"
    },
    {
        name: "Manga",
        url: "https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/icon_ManngaT06.png"
    },
    {
        name: "Flash Sale",
        url: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png"
    },
    {
        name: "Mã Giảm Giá",
        url: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png"
    },
    {
        name: "Đồ Chơi",
        url: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/IconDoChoi_Thuong_120x120.png"
    },
    {
        name: "Phiên Chợ Sách Cũ",
        url: "https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/ChoDoCu.png"
    },
    {
        name: "Sản Phẩm Mới",
        url: "https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png"
    }
]

const ItemCategory: React.FC<ImageCategory> = ({name, url}) => {
    return (
        <a href={url} className={"flex-shrink-0 flex-grow-0 text-decoration-none text-dark"}
           style={{width: "100px"}}>
            <Image
                src={url}
                className={"img-fluid"}
                alt={"category"}
                rounded
                style={{width: "40px", height: "40px"}}
            />
            <p className={"mt-1 mb-2"} style={{fontSize: "14px"}}>{name}</p>
        </a>
    )
}

const ListItemsCategory: React.FC = () => {

    const listItemsCategoryRef = React.useRef<HTMLDivElement | null>(null);
    const [scrollStatus, setScrollStatus] = React.useState<ScrollStatus>(ScrollStatus.LEFT);


    const handleScrollLeft = () => {
        if (listItemsCategoryRef.current) {
            listItemsCategoryRef.current.scrollBy({
                left: -listItemsCategoryRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }

    const handleScrollRight = () => {
        if (listItemsCategoryRef.current) {
            listItemsCategoryRef.current.scrollBy({
                left: listItemsCategoryRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    }

    React.useEffect(() => {
        const handleScroll = () => {
            if (listItemsCategoryRef.current) {
                const { scrollLeft, scrollWidth, offsetWidth } = listItemsCategoryRef.current;
                if (scrollLeft === 0) {
                    setScrollStatus(ScrollStatus.LEFT);
                } else if (scrollLeft + offsetWidth >= scrollWidth) {
                    setScrollStatus(ScrollStatus.RIGHT);
                }else{
                    setScrollStatus(ScrollStatus.NONE);
                }
            }
        };

        const currentRef = listItemsCategoryRef.current;

        if (currentRef) currentRef.addEventListener('scroll', handleScroll);

        return () => {
            if (currentRef) currentRef.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <Container className={"mt-3 px-0 position-relative"}>
            <div ref={listItemsCategoryRef}
                 className={"d-flex justify-content-around bg-white rounded overflow-x-scroll pt-3 gap-3 px-2 hiden-scroll"}>
                {
                    listImages.map((image, index) => {
                        return (
                            <ItemCategory key={index} name={image.name} url={image.url}/>
                        )
                    })
                }
            </div>
            <div className={`position-absolute top-50 start-0 translate-middle ${scrollStatus !== ScrollStatus.LEFT ? "d-block" : "d-none"} d-xxl-none`}>
                <div
                    onClick={() => {
                        handleScrollLeft();
                    }}
                    className={"book-new-button-left rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                    style={{width: "30px", height: "30px"}}>
                    <Icon.ChevronLeft size={15}/>
                </div>
            </div>
            <div className={`position-absolute top-50 start-100 translate-middle ${scrollStatus !== ScrollStatus.RIGHT ? "d-block" : "d-none"} d-xxl-none`}>
                <div
                    onClick={() => {
                        handleScrollRight();
                    }}
                    className={"book-new-button-right rounded-circle bg-white d-flex justify-content-center align-items-center shadow"}
                    style={{width: "30px", height: "30px"}}>
                    <Icon.ChevronRight size={15}/>
                </div>
            </div>
        </Container>
    );
}


export const Categories: React.FC = () => {
    return (
        <Container className={"mt-3"}>
            <ListItemsCategory/>
        </Container>
    );
}