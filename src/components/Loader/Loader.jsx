import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ThreeCircles
        height="50"
        width="50"
        color="#D55448"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="tomato"
        middleCircleColor=""
      />
    </>
  );
};

export default Loader;
