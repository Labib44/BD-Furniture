/* eslint-disable react/prop-types */

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Stars = ({ review }) => {
    console.log("review", review);

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {review >= index + 1 ? (
                    <FaStar className="icon" />
                ) : review >= number ? (
                    <FaStarHalfAlt className="icon" />
                ) : (
                    <AiOutlineStar className="icon" />
                )}
            </span>
        )
    })

    return (
        <div className='flex py-2 text-[#d4bd78]'>
            {ratingStar}
        </div>
    );
};

export default Stars;