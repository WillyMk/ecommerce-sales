import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/thunks/products/getProducts';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './products.css';
import { addProducts } from '../../redux/slices/SelectedProducts';
import { Spin } from 'antd';
import { add } from '../../redux/slices/CartSlice';

const Products = () => {
  const state = useSelector((state) => state.cart?.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleItem = (value) => {
    let params = {
      addedToCart: true,
      ...value,
   };
   
    let updateState = state.map((product) => {
      if (product.id === params.id) {
        return params;
      }
      return product;
    });
    dispatch(addProducts(params));
    dispatch(add(updateState));
  };

  const renderProductCards = () => {
    if (!state || state.length === 0) {
      return <Spin />;
    }

    return state.map((product) => (
      <div className='col-md-3 mb-4' key={product.id}>
        <Card style={{ width: '18rem' }} className='h-100'>
          <div className='text-center'>
            <Card.Img
              src={product.image}
              variant='top'
              style={{ width: '100px', height: '130px' }}
            />
          </div>
          <Card.Body className='text-center'>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: 'white' }}>
            <Button
              disabled={product?.addedToCart === true ? true : false}
              variant={product?.addedToCart === true ? 'success' : 'primary'}
              onClick={() => handleItem(product)}
            >
              {product?.addedToCart === true ? 'Added To Cart' : 'Add to Cart'}
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ));
  };

  return (
    <div className='cards-container'>
      <Container>
        <h1 className='text-center mb-4'>Products</h1>
        <Row className='justify-content-center justify-content-md-start'>
          {renderProductCards()}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
