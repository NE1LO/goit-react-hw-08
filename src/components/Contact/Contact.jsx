import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/contactsSlice";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const deleteContacts = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactBlock}>
      <ul className={css.list}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button onClick={deleteContacts} id={id} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
