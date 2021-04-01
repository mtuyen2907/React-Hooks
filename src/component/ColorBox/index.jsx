import React, { useState } from 'react';
import './ColorBox.scss';
ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['#cddc39', 'glod', '#03a9f4', '#607d8b', '#ffeb3bc7'];
    const randomIndex = Math.trunc(Math.random() * 5); //trunc hàm lấy số nguyên
    return COLOR_LIST[randomIndex];
}
function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'pink';
        return initColor;

    });  //initColor chỉ render 1 lần đầu tiên

    function handleBoxClick() {
        //get random color --> color
        const newColor = getRandomColor(); //random ngẫu nhiên màu
        setColor(newColor);
        localStorage.setItem('box-color', newColor); //lưu giá trị màu lại
    }
    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;

/**
 * 1.Khi click lên box đổi background ngẫu nhiên thành màu khác
 * 2. Giữ màu background của box sau khi reload trình duyệt
 */
