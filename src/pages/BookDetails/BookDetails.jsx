import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId === bookId);
    const {bookName,image,author,category,review,tags,totalPages,yearOfPublishing,rating,publisher}=singleBook;
    // console.log(singleBook)
    // console.log(data);
    const handleMarkAsRead = (id)=>{
        addToStoredDB(id);
    }
    return (
        <div className='flex my-10'>
            <div className='w-2xl rounded-2xl p-10 bg-gray-100 flex justify-center items-center'>
            <img className='min-w-[200px] h-[500px] py-10  ' src={image} alt="" />
            </div>
            <div className='w-2xl px-10'>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <h2 className='mt-2'><span className='font-bold'>By :</span> {author}</h2>
                <div className="divider"></div>
                <h3 className='font-bold text-gray-500'>{category}</h3>
                <div className="divider"></div>
                <h4><span className='font-bold'>Review :</span> {review}</h4>
                <h3 className='mt-4'><span className='font-bold'>Tags: </span ><small className='bg-gray-400 text-gray-200 px-5 py-2  rounded-3xl font-bold ml-3'>#{tags}</small></h3>
                <div className="divider"></div>
                <h3>Number of Pages: <span className='font-bold ml-5'>{totalPages}</span></h3>
                <h2 className='my-3'>Publisher: <span className='font-bold ml-20'>{publisher}</span></h2>
                <h3 className='mb-3'>Year of Publishing: <span className='font-bold ml-5'>{yearOfPublishing}</span></h3>
                <h3>Rating: <span className='font-bold ml-25'>{rating}</span></h3>
                <div className='mt-5'>
                <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline mr-5">Mark as Read</button>
                <button class="btn btn-active btn-primary">Add To WishList</button>
                </div>
            </div>
            
        </div>
    );
};

export default BookDetails;