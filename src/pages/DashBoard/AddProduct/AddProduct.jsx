import axios from "axios";
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = import.meta.env.VITE_APP_IMG;
    // console.log(imgHostKey)

    const handleAddProduct = (data) => {
        console.log('Form data', data);

        const picture = data.img[0];
        const formData = new FormData();
        formData.append('image', picture);
        // console.log('miltiple image',picture)

        const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`
        axios.post(imgUrl, formData)
            .then((res) => {
                const imageData = res.data
                // console.log('Image host', imageData);

                if (imageData.success) {
                    const product = {
                        productName: data.productName,
                        newPrice: data.price,
                        oldPrice: data.oldPrice,
                        productImg: imageData.data.url,
                        variations: [
                            {
                                variationImg: imageData.data.url,
                                variation: data.variation,
                                productBarcode: data.productBarcode,
                                sockAmmount: data.sockAmmount,
                                defaultPurchasePrice: data.defaultPurchasePrice,
                                profitPercent: data.profitPercent,
                            },
                        ],

                        description: data.description,

                    }
                    console.log('Product', product);

                    axios.post("http://localhost:5000/products", product)
                        .then((res) => {
                            console.log('this is axios data', res);
                        })
                }
            })






    }
    return (
        <div className='flex justify-center '>
            <div className='w-[500px]'>
                <h1 className='text-center text-2xl font-bold font-serif'>Add A Product</h1>

                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text text-xl font-serif">Product Name</span>
                        </label>
                        <input type="name" {...register("productName", { required: 'Product name is required' })} className="input border border-[#a5907e] w-full" />
                        {errors.productName && <p role="alert" className='text-red-600'>{errors.productName?.message}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="form-control w-full m-3">
                            <label className="label">
                                <span className="label-text text-xl font-serif">Price</span>
                            </label>
                            <input type="name" {...register("price", { required: 'Price is required' })} className="input border-[#a5907e] w-full" />
                            {errors.price && <p role="alert" className='text-red-600'>{errors.price?.message}</p>}
                        </div>
                        <div className="form-control w-full m-3">
                            <label className="label">
                                <span className="label-text text-xl font-serif">Old Price</span>
                            </label>
                            <input type="name" {...register("oldPrice", { required: 'Price is required' })} className="input border-[#a5907e] w-full" />
                            {errors.oldPrice && <p role="alert" className='text-red-600'>{errors.oldPrice?.message}</p>}
                        </div>
                    </div>

                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text text-xl font-serif">Select your product Image</span>
                        </label>
                        <input type="file" {...register("img", { required: 'Photo is required' })} className="input border-[#a5907e] w-full" />
                        {errors.img && <p role="alert" className='text-red-600'>{errors.img?.message}</p>}
                    </div>

                    {/* Variation*/}
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text text-xl font-serif">Select Variation</span>
                        </label>
                        <select {...register("variation", { required: true })} className="input border-[#a5907e] w-full">
                            <option value="">Select Variation......</option>
                            <option value="Iphone 14 pro max-color-Gray">Iphone 14 pro max-color-Gray</option>
                            <option value="Iphone 14 pro max-color-Green">Iphone 14 pro max-color-Green</option>
                            <option value="Iphone 14 pro max-color-Red">Iphone 14 pro max-color-Red</option>
                        </select>
                    </div>
                    {/* ........ */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="form-control w-full m-3">
                            <label className="label">
                                <span className="label-text text-xl font-serif">Product Barcode</span>
                            </label>
                            <input type="name" {...register("productBarcode", { required: 'Product Barcode is required' })} className="input border border-[#a5907e] w-full" />
                            {errors.productBarcode && <p role="alert" className='text-red-600'>{errors.productBarcode?.message}</p>}
                        </div>
                        <div className="form-control w-full m-3">
                            <label className="label">
                                <span className="label-text text-xl font-serif">Stock Ammount</span>
                            </label>
                            <input type="number" {...register("sockAmmount", { required: 'Stock Ammount is required' })} className="input border border-[#a5907e] w-full" />
                            {errors.sockAmmount && <p role="alert" className='text-red-600'>{errors.sockAmmount?.message}</p>}
                        </div>
                        <div className="form-control w-full m-3">
                            <label className="label">
                                <span className="label-text text-xl font-serif">Default Purchase Price</span>
                            </label>
                            <input type="name" {...register("defaultPurchasePrice", { required: 'Default Purchase Price is required' })} className="input border border-[#a5907e] w-full" />
                            {errors.defaultPurchasePrice && <p role="alert" className='text-red-600'>{errors.defaultPurchasePrice?.message}</p>}
                        </div>
                        <div className="form-control w-full m-3">
                            <label className="label">
                                <span className="label-text text-xl font-serif">Profit Percent</span>
                            </label>
                            <input type="number" {...register("profitPercent", { required: 'Default Purchase Price is required' })} className="input border border-[#a5907e] w-full" />
                            {errors.profitPercent && <p role="alert" className='text-red-600'>{errors.profitPercent?.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text text-xl font-serif">Variation product Image</span>
                        </label>
                        <input type="file" {...register("variationImg", { required: 'Photo is required' })} className="input border-[#a5907e] w-full" />
                        {errors.variationImg && <p role="alert" className='text-red-600'>{errors.variationImg?.message}</p>}
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-serif p-3">Description</span>
                        </label>
                        <textarea placeholder="Description" {...register("description", { required: 'Stock Ammount is required' })} className="m-3 textarea border border-[#a5907e] textarea-lg w-full" ></textarea>
                        {errors.description && <p role="alert" className='text-red-600'>{errors.description?.message}</p>}
                    </div>

                    <input type="submit" className='btn bg-[#dbc7b6] font-serif hover:bg-[#a5907e] hover:text-white w-full m-3' />

                </form>

            </div>
        </div>
    );
};

export default AddProduct;