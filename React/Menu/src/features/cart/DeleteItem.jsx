import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { delItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(delItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
