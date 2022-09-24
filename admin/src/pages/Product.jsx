import { Link } from "react-router-dom";
import styled from "styled-components";
import productRedux from "../redux/productRedux";


const Container = styled.div``;

const ProductTitleContainer = styled.div``;

const ProductTitle = styled.h1``;


const ProductAddButton = styled.button``;

const ProductTop = styled.div``;

const ProductTopLeft = styled.div``;

const ProductTopRight = styled.div``;

const ProductInfoTop = styled.div``;

const ProductInfoImg = styled.img``;

const ProductName = styled.span``;

const ProductInfoBottom = styled.div``;

const ProductInfoItem = styled.div``;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span``;

const ProductBottom = styled.div``;



const Product = () => {
    return (
        <Container>
            <ProductTitleContainer>
                <ProductTitle>
                    Product
                    <Link to="/newProduct">
                        <ProductAddButton />
                        Create
                    </Link>
                </ProductTitle>
            </ProductTitleContainer>
            <ProductTop>
                <ProductTopLeft>

                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImg />
                        <ProductName>BUBU</ProductName>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoKey>id:</ProductInfoKey>
                        <ProductInfoValue>123456</ProductInfoValue>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>

            </ProductBottom>
        </Container>
    )
};

export default Product;
