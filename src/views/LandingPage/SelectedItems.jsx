import NavBar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './products.css';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from '../../redux/slices/SelectedProducts';
import { add } from '../../redux/slices/CartSlice';

const SelectedItems = () => {
  const state = useSelector((state) => state?.selectedItems?.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteItem = (value) => {
    let params = {
      addedToCart: false,
      ...value,
    };
    let updateState = state.map((product) => {
      if (product.id === params.id) {
        return params;
      }
      return product;
    });
    dispatch(removeProduct(value));
    dispatch(add(updateState));
  };

  const renderProductCards = () => {
    if (!state || state.length === 0) {
      return (
        <h4 style={{ color: 'purple', textAlign: 'center' }}>
          You have not selected any Item!
        </h4>
      );
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
            <Button variant='danger' onClick={() => handleDeleteItem(product)}>
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    ));
  };

  return (
    <div className='cards-container1'>
      <Container>
        <h1 className='text-center mb-4 mt-12'>Products</h1>
        <Row className='justify-content-center justify-content-md-start'>
          {renderProductCards()}
        </Row>
      </Container>
    </div>
  );
};

export default SelectedItems;
