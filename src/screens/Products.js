import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import { products } from './fakeData';
import Heart from '../assets/Heart';
import Header from '../components/Header';
import { getImageUrl } from '../utils';

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://shoes.hungvu.net/get-products');
        console.log(response);
        setProducts(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);


  return (
    <div>
     
      <Header />

     
      <div className="head">Products</div>
      <div className='product-container flex flex-row'>
     
        <div className='w-72 mr-10'>
          <div className='mt-6 flex flex-row items-center justify-between'>
            <div className='text-2xl font-bold'>Filter</div>
            <div className='cursor-pointer mr-8'>Clear all</div>
          </div>

          <div className='font-bold mt-2'>Gender</div>

          <div className=''>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="men"
                name="gender"
                value="men"
            
              />
              <label htmlFor="men">Men</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="women"
                name="gender"
                value="women"
           
              />
              <label htmlFor="women">Women</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="kid"
                name="gender"
                value="kid"

              />
              <label htmlFor="kid">Kid</label>
            </div>
          </div>

          <div className='font-bold mt-2'>Rating</div>
          <div className="flex flex-row justify-between w-11/12 mt-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <p key={item}>
                {item}
                <sup>⭐</sup>
              </p>
            ))}
          </div>
          <div className="">
            <input
              type="range"
              className="w-11/12"
              min={1}
              max={5}
       
            />
          </div>

          <div className='font-bold mt-2'>Brand</div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option1"
              name="nike"
         
            />
            <label htmlFor="option1">Nike</label>
          </div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option2"
              name="adidas"
 
            />
            <label htmlFor="option2">Adidas</label>
          </div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option3"
              name="puma"
    
            />
            <label htmlFor="option3">Puma</label>
          </div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option4"
              name="vans"
            // checked={'vans'}
            // onChange={() => {}}
            />
            <label htmlFor="option4">Vans</label>
          </div>
        </div>

     
        <div className='flex-1'>
          <div className='flex flex-row items-center'>
            <div className='mr-2'>Sort by</div>
            <select
              className='border rounded border-gray-600 h-9'
           
            >
              <option>Please select an option</option>
              <option value="HIGH_TO_LOW">
                Price: High to Low
              </option>
              <option value="LOW_TO_HIGH">
                Price: Low to High
              </option>
            </select>
          </div>

          <div className='flex flex-wrap overflow-auto mt-4 -mr-10' style={{ height: 'calc(100vh - 16rem)' }}>
            {products.map(e => (
              <div key={e._id} className='mr-12 mb-12' style={{ width: 'calc(25% - 48px)' }}>
                <div className="relative">
                  <img src={getImageUrl(e.images?.[0])} alt={e.title} className='object-cover h-48 w-full' />
                  <div className="wrap-heart">
                    <Heart />
                  </div>
                </div>
                <div className='p-1'>
                  <div onClick={() => navigate(`/detail/${e?._id}`)} className='font-bold'>{e.name}</div>
                  
                  <div>{e.star}⭐</div>
                  <div>{e.price}$</div>
                </div>
                <div className='bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                  Add to cart
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
