import React from 'react';
import { FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // console.log(singleBook)
    const {bookName,author,bookId,image,rating,category,tags,yearOfPublishing,publisher} = singleBook;
    return (
        <Link to={`/bookdetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border border-gray-100 p-4">
  <figure className='py-15 rounded-2xl w-2/3 mx-auto bg-gray-100'>
    <img className='h-[200px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10'>
        {
            tags.map(tag=><button className='bg-gray-100 rounded-3xl px-4 py-2 text-lime-700 font-bold'>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by : {publisher}</p>
    <div className='border-t-1 border-dashed border-gray-300'></div>
    <div className="card-actions justify-end">
      <div className="">{category}</div>
      <div className="">{rating}</div>
      <FaStarHalfAlt></FaStarHalfAlt>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;