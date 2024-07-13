import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="green"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass=""
        wrapperStyle={{}}
      />
      <p className={css.message}>Loading... please wait...</p>
    </div>
  );
};

export default Loader;
