import { Publish } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/apiCalls";
import app from "../firebase";

const Container = styled.div`
    padding: 20px;
    height: 100%;
`;

const ProductTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProductTitle = styled.h1``;


const ProductAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`;

const ProductTop = styled.div`
    display: flex;
`;

const ProductTopLeft = styled.div`
    flex:1;
`;

const ProductTopRight = styled.div`
    flex:1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`;

const ProductInfoImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`;

const ProductName = styled.span`
    font-weight: 600;
`;

const ProductInfoBottom = styled.div`
    margin-top: 10px;
`;

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
    font-weight: 300;
`;

const ProductBottom = styled.div`
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`;

const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 10px;
    color: gray;
`;

const Input = styled.input`
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
`;

const Select = styled.select`
    margin-bottom: 10px;
`;

const Option = styled.option``;

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`;

const ProductUploadImg = styled.img``;

const ProductButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color:white;
    font-weight: 600;
    cursor: pointer;
`;


const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId));

    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.id]: e.target.value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        //to ensure unique file naming by adding date to filename
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, img: downloadURL };
                    updateProduct(product, dispatch);
                });
            }
        );

    };
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
                    Chart
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImg src={product.img} />
                        <ProductName>{product.title}</ProductName>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoItem>
                            <ProductInfoKey>id:</ProductInfoKey>
                            <ProductInfoValue>{product._id}</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>sales:</ProductInfoKey>
                            <ProductInfoValue>5123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>in stock:</ProductInfoKey>
                            <ProductInfoValue>{product.inStock}</ProductInfoValue>
                        </ProductInfoItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductForm>
                    <ProductFormLeft>
                        <Label>Product Name</Label>
                        <Input name="title" type="text" placeholder={product.title} onChange={handleChange} id="title" />
                        <Label>Product Description</Label>
                        <Input type="text" placeholder={product.desc} onChange={handleChange} name="desc" id="desc" />
                        <Label>Price</Label>
                        <Input type="number" placeholder={product.price} onChange={handleChange} name="price" id="price" />
                        <Label>In Stock</Label>
                        <Select name="inStock" id="idStock" onChange={handleChange}>
                            <Option value="true">Yes</Option>
                            <Option value="false">No</Option>
                        </Select>
                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductUpload>
                            <ProductUploadImg src={product.img} />
                            <Label htmlFor="file">
                                <Publish />
                            </Label>
                            <Input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        </ProductUpload>
                        <ProductButton onClick={handleClick}>
                            Update
                        </ProductButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottom>
        </Container>
    )
};

export default Product;
