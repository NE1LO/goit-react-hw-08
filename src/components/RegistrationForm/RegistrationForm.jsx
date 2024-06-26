import css from "./RegistrationForm.module.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const validation = Yup.object().shape({
  email: Yup.string()
    .min(4, "Too Short!")
    .max(40, "Too Long!")
    .required("Required"),
  name: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success("Registration was successful"))
      .catch(() => toast.error("Registration failed"));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", name: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div style={{ position: "relative" }}>
          <div className={css.errorMessage}>
            <ErrorMessage className={css.error} name="email" as="span" />
          </div>

          <Field
            type="email"
            name="email"
            placeholder="Your email"
            className={css.input}
          />
        </div>
        <div style={{ position: "relative" }}>
          <div className={css.errorMessage}>
            <ErrorMessage className={css.error} name="name" as="span" />
          </div>

          <Field
            className={css.input}
            type="name"
            name="name"
            placeholder="Name"
          />
        </div>
        <div style={{ position: "relative" }}>
          <div className={css.errorMessage}>
            <ErrorMessage className={css.error} name="password" as="span" />
          </div>

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.input}
          />
        </div>
        <Button
          type="submit"
          style={{ backgroundColor: "", color: "" }}
          className={css.btn}
          variant="contained"
        >
          Registration
        </Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
