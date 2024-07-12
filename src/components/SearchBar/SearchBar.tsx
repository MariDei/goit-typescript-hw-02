import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  return (
    <header className={css.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.query.trim() === '') {
            toast.error('Search field cannot be empty!', {
              style: {
                borderRadius: '10px',
                backgroundColor: '#333',
                color: 'red',
              },
            });
          } else {
            onSubmit(values.query);
          }
          setSubmitting(false);
        }}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
