import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../slices/productSlice';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const StorePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(listProducts());
        }
    }, [productStatus, dispatch]);

    useEffect(() => {
        console.log(products); // Debugging: log the products to check the image URLs
    }, [products]);

    const baseUrl = 'http://localhost:5000'; // Replace with your actual base URL

    return (
        <div className='grid grid-rows-9 h-screen max-w-full bg-white pt-8'>
            <div className='row-span-1 pt-8 pl-7 font-iconaSans text-xs md:text-md'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to='/' className='hover:text-black'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Store</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='row-span-1 flex justify-center items-center'>
                <h1 className='font-drukwidebold text-4xl'>ITEMS</h1>
            </div>
            <div className='row-span-1 bg-slate-600'>
                {/* Additional content can go here */}
            </div>
            <div className='row-span-6 overflow-y-auto p-4'>
                <div className='flex flex-wrap gap-24 justify-center items-center'>
                    {productStatus === 'loading' && <p>Loading...</p>}
                    {productStatus === 'failed' && <p>{error}</p>}
                    {productStatus === 'succeeded' && products.map((product) => (
                        <div key={product._id} className='w-full md:w-1/5 bg-gray-200 p-4 rounded-lg'>
                            {product.image && (
                                <img src={`${baseUrl}${product.image}`} alt={product.name} className='w-full h-48 object-cover rounded-t-lg' />
                            )}
                            <h2 className='font-bold text-xl mt-4'>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StorePage;
