import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decItem, incItem } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItem(pizzaId))}>
        -
      </Button>
      {currentQuantity}
      <Button type="round" onClick={() => dispatch(incItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
