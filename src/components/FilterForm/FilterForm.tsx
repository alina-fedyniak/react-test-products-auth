import React, {useState, useCallback} from 'react';
import {filterPosts} from "../Products/feature/productsSlice";
import {useAppDispatch} from "../../store/hooks";
import {getProducts} from "../Products/feature/actionCreators";

const FilterForm = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const handleInput = useCallback(
        (event: any) => {
            const searchValue = event.target.value
            setValue(searchValue);
            if (searchValue === '') {
                dispatch(getProducts({per_page: 6}));
            } else {
                dispatch(filterPosts(event.target.value))
            }
        },
        [dispatch, setValue],
    );

    return (
        <>
            <h1>Filter</h1>
            <form>
                <label>
                    Name:
                    <input type="search"
                           name="name"
                           placeholder="Search for name..."
                           value={value}
                           onChange={handleInput}
                    />
                </label>
                <div>
                    <label>
                        Price:
                        <input type="text" name="name" placeholder="from..."/>
                        <input type="text" name="name" placeholder="to..."/>
                    </label>
                    <input type="submit" value="ok"/>
                </div>
                <div>
                    <label>
                        Data:
                        <input type="date" name="name" placeholder="from..."/>
                        <input type="date" name="name" placeholder="to..."/>
                    </label>
                    <input type="submit" value="ok"/>
                </div>
            </form>
        </>
    );
}

export default FilterForm;
