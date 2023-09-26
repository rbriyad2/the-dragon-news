import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, eveniet sapiente vel non saepe quos esse impedit voluptate provident, magni ratione earum magnam iure cumque suscipit aperiam perspiciatis? Sed, magni soluta quam doloremque odio rem vero modi natus libero cupiditate ratione. Eligendi, molestias dignissimos facere dolorem eos cum, fuga quis aspernatur quia vel magnam maiores impedit sit veritatis facilis veniam assumenda corrupti minima sequi ducimus. Non laudantium nobis consequuntur. Voluptatem excepturi perspiciatis in atque dolore ea error mollitia magni, hic reiciendis! Laborum commodi sunt laboriosam assumenda explicabo soluta accusantium atque placeat excepturi. Unde ex, quidem veniam laborum voluptatem natus reiciendis.</p>

            <button> <Link to='/register'>Go Back</Link></button>
        </div>
    );
};

export default Terms;