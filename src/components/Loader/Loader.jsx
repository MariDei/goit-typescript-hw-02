import { RotatingLines } from 'react-loader-spinner';
// import css from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperClass=""
        wrapperStyle={{}}
      />
      <p>Loading... please wait...</p>
    </div>
  );
};

export default Loader;
