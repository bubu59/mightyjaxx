import styled from "styled-components";

const Container = styled.div`
    flex: 4;
    margin-left: 100px;
`;

const AddProductTitle = styled.h1``;

const AddProductForm = styled.form``;

const AddProductItem = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

const Select = styled.select``;

const Option = styled.option``;

const AddProductButton = styled.button``;


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
