import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ThreeCircles
        height="50"
        width="50"
        color="#86C232"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="#86C232"
        middleCircleColor=""
      />
    </>
  );
};

export default Loader;
