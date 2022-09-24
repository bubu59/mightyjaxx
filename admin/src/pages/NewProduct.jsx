import styled from "styled-components";

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
    return (
        <Container>
            <AddProductTitle>
                <AddProductForm>
                    <AddProductItem>
                        <Label>Image</Label>
                        <Input type="file" id="file" />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Title</Label>
                        <Input name="text" type="text" placeholder="Apple Airpods" />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Description</Label>
                        <Input name="desc" type="text" placeholder="description..." />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Price</Label>
                        <Input name="price" type="number" placeholder="100" />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Categories</Label>
                        <Input type="text" placeholder="jeans, skirts" />
                    </AddProductItem>
                    <AddProductItem>
                        <Label>Stock</Label>
                        <Select name="inStock">
                            <Option value="true">Yes</Option>
                            <Option value="false">No</Option>
                        </Select>
                    </AddProductItem>
                    <AddProductButton>
                        Create
                    </AddProductButton>
                </AddProductForm>
            </AddProductTitle>

        </Container>
    );
};

export default NewProduct;
