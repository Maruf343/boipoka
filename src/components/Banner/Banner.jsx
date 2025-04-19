import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-5 rounded-2xl p-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='w-[600px] rounded-2xl'
      src={bookimage}
    />
    <div className=''>
      <h1 className="text-5xl font-bold leading-17">Books to freshen up your bookshelf</h1>      
      <button className="btn btn-success mt-10">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;