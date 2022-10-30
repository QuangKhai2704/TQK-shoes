import {
  useNavigate
} from "react-router-dom";
import Header from '../components/Header';
import { categories } from './fakeData';

function App() {
  const navigate = useNavigate();

  const onMoveProduct = () => {
    navigate('/product');
  };
  return (
    <div>
      
      <Header />

      <div className='flex flex-row move-down'>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='text-6xl font-bold text-center mx-20'>REGAIN YOUR CONFIDENCE ON THE COURT.</div>
          <div className='text-xl mt-10'>Take your game to the next level.</div>
        </div>
        <div className='flex w-1/2 img-hero' />
      </div>

      
      <div className='flex flex-row justify-around px-10 mt-8'>
        {categories.map((e, i) => (
          <div className='border flex-1 justify-center items-center relative'
            style={i === 1 ? { marginLeft: 20, marginRight: 20 } : {}}
          >
            <div className="gradient-category"></div>
            <img src={e.img} alt={e.title} className='h-full w-full object-cover' />
            <div className='flex flex-col absolute top-1/2 left-1/2 transform-center'>
              <div className=' text-center text-white text-3xl font-bold'>{e.title}</div>
              <button onClick={onMoveProduct} className='bg-white p-2 round'>Shop Now</button>
            </div>
          </div>
        ))}
      </div>

     
      <div className='px-10 mt-8'>
        <div className='text-6xl font-bold'>FEATURED</div>
        <div className='feature-img'>#Off the Wall</div>
      </div>

    </div>
  );
}

export default App;
