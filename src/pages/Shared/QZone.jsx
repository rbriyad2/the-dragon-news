import React from 'react';
import qzoneimg from '../../assets/qZone1.png';
import qzoneimg2 from '../../assets/qZone2.png';
import qzoneimg3 from '../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-4 py-4'>
            <h4>QZone</h4>
            <img src={qzoneimg} alt="" />
            <img src={qzoneimg2} alt="" />
            <img src={qzoneimg3} alt="" />
        </div>
    );
};

export default QZone;