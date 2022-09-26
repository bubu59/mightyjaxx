import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { addProduct } from "../redux/apiCalls";

const Container = styled.div`
    flex: 4;
    margin-left: 100px;
`;

const AddProductTitle = styled.h1``;

const AddProductForm = styled.form`
    margin-top: 10px;
`;

const AddProductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Label = styled.label`
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Input = styled.input`
    padding: 10px;
`;

const Select = styled.select`
    padding: 10px;
`;

const Option = styled.option``;

const AddProductButton = styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;


const NewProduct = () => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleCat = (e) => {
        setCat(e.target.value.split(","));
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
                    const product = { ...inputs, img: downloadURL, categories: cat };
                    addProduct(product, dispatch);
                });
            }
        );

    };


    return (
        <Container>
            <AddProductTitle>
                <AddProductForm>
                    <AddProductItem>
                        <Label>Image</Label>
                        <Input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Title</Label>
                        <Input name="text" type="text" placeholder="Apple Airpods" onChange={handleChange} />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Description</Label>
                        <Input name="desc" type="text" placeholder="description..." onChange={handleChange} />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Price</Label>
                        <Input name="price" type="number" placeholder="100" onChange={handleChange} />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Categories</Label>
                        <Input type="text" placeholder="jeans, skirts" onChange={handleCat} />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Stock</Label>
                        <Select name="inStock" onChange={handleChange}>
                            <Option value="true">Yes</Option>
                            <Option value="false">No</Option>
                        </Select>
                    </AddProductItem>
                    <AddProductButton onClick={handleClick}>
                        Create
                    </AddProductButton>
                </AddProductForm>
            </AddProductTitle>
        </Container>
    );
};

export default NewProduct;
