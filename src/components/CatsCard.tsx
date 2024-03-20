import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CatsCard: React.FC = (data) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 450, height: 700 }}
        cover={
          <img
            alt="example"
            src="https://vcahospitals.com/-/media/2/vca/images/pet-health-library/cat-breeds/cat-breed-placeholder.ashx?h=353&iar=0&w=424&hash=DF2F0996D34BD7ABE62C1C0002442363"
          />
        }
      >
        <Meta title={data?.name} description={data?.description} />
        <h4>Lifespan: {data?.life_span} years </h4>
      </Card>
    </>
  );
};

export default CatsCard;
