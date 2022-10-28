import React, { useEffect, useState } from 'react';
import {
  FaHeart,
} from "react-icons/fa";
import axios from 'axios';
import {  useParams } from "react-router-dom";
import Header from '../components/Header';
import { getImageUrl } from '../utils';

const sizeList = [40, 41, 42, 43];

function App() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productDetail = await axios.get(`http://shoes.hungvu.net/product/${params.id}`);
        const commentsResult = await axios.get(`http://shoes.hungvu.net/get-product-comments/${params.id}`);
        setProducts(productDetail?.data?.data);
        console.log('commentsResult', commentsResult);
        setCommentList(commentsResult?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  const onAddComment = async () => {
    const data = {
      email, name: name, content: content, productId: params.id
    };
    try {
      const response = await axios.post(`http://shoes.hungvu.net/create-comment`, data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* header */}
      <Header />

      {/* product detail */}
      <div>
        <div className='flex flex-row mt-14 mb-8'>
          <div className='w-1/2'>
            <img src={getImageUrl(products?.images?.[0])} alt={'shoes'} className='object-cover w-full' style={{ height: 500 }} />
          </div>
          <div className='w-1/2 px-8'>
            <div className='bg-gray-800 inline-block p-2 px-6 text-white font-bold'>MEN</div>
            <div className='text-4xl font-bold my-1'>{products?.name}</div>
            <div>{products?.accessories}</div>
            <div className='my-2'>Rating: 4⭐</div>
            <div>Price: 5000$</div>
            <div className='my-2 border-dashed border-y-2 border-gray-500 py-4'>
              {products?.details}
            </div>
            <div className='flex flex-row items-center'>
              <div className='mr-2'>Available sizes:</div>
              {sizeList.map(e => (
                <div className='mr-2 mt-2 flex px-4 h-11 justify-center items-center uppercase font-medium border border-gray-400 cursor-pointer'>
                  {e}
                </div>
              ))}
            </div>
            <div className='flex flex-row mt-4'>
              <div className='w-1/2 bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                Add to cart
              </div>
              <div className='ml-2 flex px-4 bg-gray-200 h-11 justify-center items-center uppercase font-medium text-white cursor-pointer'>
                <FaHeart
                  className='text-gray-800'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Description
        </div>
        <div className='px-40 my-4'>
          RACER TR21 SHOES
          RUNNING-INSPIRED SHOES FOR DAILY WEAR.
          Bring the comfort and athletic style of running footwear to your everyday look in these adidas shoes. Step through your day confidently with a snug fit and a lightweight midsole that cushions your feet with every step.

          This product is made with Primegreen, a series of high-performance recycled materials. 50% of the upper is recycled content. No virgin polyester.
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Reviews
        </div>
        <div className='px-40 my-4'>
          <div className='flex flex-row justify-between mb-4'>
            <div className='font-bold text-xl'>841 reviews</div>
            <div className='underline'>Write a review</div>
          </div>
          <div className='mt-4 flex flex-col'>
            <div className='mt-4'>Name</div>
            <input className='border mt-2' placeholder='name' value={name} onChange={ev => setName(ev.target.value)} />
            <div className='mt-4'>Email</div>
            <input className='border mt-2' placeholder='email' value={email} onChange={ev => setEmail(ev.target.value)} />
            <div className='mt-4'>Content</div>
            <textarea className='border mt-2' placeholder='content' value={content} onChange={ev => setContent(ev.target.value)} />
            <div onClick={onAddComment} className='w-1/2 bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
              Add comment
            </div>
          </div>

          {commentList?.map(e => (
            <div className='w-3/4 mb-4'>
              <div className='font-bold'>Michel jackson</div>
              <div className='text-xs'>2022-01-03 20:40:10</div>
              <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
            </div>))}

        </div>

        {/* <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Products viewed
        </div>
        <div className='flex flex-row justify-around px-40 my-4'>
          {products.slice(2, 6).map(e => (
            <div className='mr-6'>
              <img src={e.img} alt={'shoes'} className='object-cover w-72 h-72' />
            </div>
          ))}
        </div> */}

      </div>


    </div >
  );
}

export default App;
