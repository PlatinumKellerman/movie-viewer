import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ThreeCircles
        height="100"
        width="100"
        color="#D55448"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      ;
    </>
  );
};

export default Loader;
