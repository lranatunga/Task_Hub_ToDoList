
import deleteImage from '../images/delete.png';

function DeleteButton(props) {
  return (
    <img
      className="delete-img"
      src={deleteImage}
      alt="delete"
      onClick={props.onClick}
      style={{ cursor: props.onClick ? 'pointer' : 'default' }}
    />
  );
}

export default DeleteButton;
