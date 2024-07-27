import React from "react";
import {Carousel, Col, Container, Image, Row} from "react-bootstrap";

const HeroSectionContentOneLeft: React.FC = () => {
    return (
        <div>
            <Carousel className={"pe-xxl-2"}>
                <Carousel.Item interval={50000}>
                    <Image
                        src="https://cdn0.fahasa.com/media/magentothem/banner7/Laprap_Slide_T7_840x320.jpg"
                        className={"rounded"}
                        fluid
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <Image
                        src="https://cdn0.fahasa.com/media/magentothem/banner7/Trang_baloMrVui_0724_Slidebanner_840x320-20.jpg"
                        className={"rounded"}
                        fluid
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

const HeroSectionContentOneRight: React.FC = () => {
    return (
        <div className={"d-none d-xxl-flex flex-column justify-content-between"}>
            <Image
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/DoiTac_SubBanner_392x156_2.jpg"
                className={"rounded"}
                style={{width: "450px", height: "160px", paddingBottom: "3px"}}
            />
            <Image src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2024/VPbank392x156.png"
                   className={"rounded"}
                   style={{width: "450px", height: "160px", paddingTop: "3px"}}
            />
        </div>
    )
}

const HeroSectionContentOne: React.FC = () => {
    return (
        <div className={"d-flex flex-row justify-content-center justify-content-xxl-between pt-3"}>
            <HeroSectionContentOneLeft/>
            <HeroSectionContentOneRight/>
        </div>
    )
}

const HeroSectionContentTwo: React.FC = () => {
    return (
        <Row className={"mt-2"}>
            <Col className={"pe-0"}>
                <Image src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/Hotwheels_Smallbanner_T7_310x210.jpg"
                       className={"rounded"}
                       fluid
                />
            </Col>
            <Col className={"pe-0"}>
                <Image src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/BannerNgoaiVan0707_SmallBanner_310x210.jpg"
                       className={"rounded"}
                       fluid
                />
            </Col>
            <Col className={"pe-0"}>
                <Image src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/Backtoschool_mainbannerT7__SmallBanner_310x210.jpg"
                       className={"rounded"}
                       fluid
                />
            </Col>
            <Col>
                <Image src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/TrangDoChoiThang7_Resize_SmallBanner_T7_310x210_2.jpg"
                       className={"rounded"}
                       fluid
                />
            </Col>
        </Row>
    )
}

export const HeroSection: React.FC = () => {
    return (
        <Container className="hero-container">
            <HeroSectionContentOne/>
            <HeroSectionContentTwo/>
        </Container>
    )
}