import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getCatsFetch } from './cat/reduxToolkit/catReducer';
import Header from './components/Header';
import CatsCard from './components/CatsCard';
import { Flex } from 'antd';
function App() {
  const catsData = useSelector((state) => state.cats.cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(catsData);
  return (
    <>
      <Header title="Cat Breeds Explorer" />
      <Flex wrap="wrap" gap="small">
        {catsData.map((data: any) => (
          <div key={data.id}>
            <CatsCard {...data} />
          </div>
        ))}
      </Flex>
    </>
  );
}
export default App;
