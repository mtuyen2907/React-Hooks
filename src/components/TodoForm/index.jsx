import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaulProps = {
    onSubmit: null,
};
function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        //Prevent reloangdinng browser
        e.preventDefault();
        if (!onSubmit) return;

        const formValues = {
            title: value,
        };
        onSubmit(formValues);
        //Reset form
        setValue('');

    }
    return (
        <form onSubmit={handleSubmit} >
            {/* Tạo form nhập dữ liệu */}
            <input type="text"
                value={value}
                onChange={handleValueChange}
            />

        </form>
    );
}
export default TodoForm;

/** Bài tập 3: TodoList - Add new Todo
 * Tạo một form đơn giản như sau:
 * - Chứa một thẻ input để user có thẻ nhập dữ liệu
 * - Khi form submit:
 *  + Chặn browser reload
 *  + Tạo thêm một todo mới vào danh sách
 *
 * PHÂN TÍCH
 *
 * TodoForm
 *  - Props:
 *      + onSubmit: hàm đc giọ khi đc submit
 * - State: value
 * Render: form> input
 * Handle submit: gọi hàm props.onSubmit()
 *
 * 1. TodoForm quản lý nhập dữ liệu
 * 2. Khi submit, TodoForm báo component cha App, đây là dữ liệu user submit
 * 3. App: lấy dữ liệu, cập nhật state todoList
 * 4. TodoList thấy todoList mới, re-render lại
 * */