import Snowfall from 'react-snowfall';

export const Snow = () => {
  return (
    <>
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        snowflakeCount={150}
        radius={[0.1, 1.0]}
        changeFrequency={1000}
      />
    </>
  );
};

export default Snow;
