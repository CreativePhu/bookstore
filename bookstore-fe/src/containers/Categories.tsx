import React from "react";
import {Container, Image} from "react-bootstrap";

interface ImageCategory {
    name: string;
    url: string;
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


export const Categories: React.FC = () => {
    return (
        <Container className={"mt-3"}>
            <div className={"d-flex justify-content-around bg-white rounded overflow-x-scroll pt-3 gap-3 px-2 hiden-scroll"}>
                {
                    listImages.map((image, index) => {
                        return (
                            <a href={image.url} key={index} className={"flex-shrink-0 flex-grow-0 text-decoration-none text-dark"} style={{width: "100px"}}>
                                <Image
                                    src={image.url}
                                    className={"img-fluid"}
                                    alt={"category"}
                                    rounded
                                    style={{width: "40px", height: "40px"}}
                                />
                                <p className={"mt-1 mb-2"} style={{fontSize: "14px"}}>{image.name}</p>
                            </a>
                        )
                    })
                }
            </div>
        </Container>
    );
}