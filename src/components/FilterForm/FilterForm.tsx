import React, { useCallback } from 'react';
import {useAppDispatch} from "../../store/hooks";
import {StyledWrap} from "./FilterFormStyled";
import { Formik } from 'formik';
import {filterProducts, getProducts} from "../Products/feature/actionCreators";

interface IValues {
    title: string;
    price_from: string;
    price_to: string;
    from: string;
    to: string;
}

const FilterForm = () => {
    const dispatch = useAppDispatch();

    const onSubmit = useCallback(
        async (data: IValues) => {
            await dispatch(filterProducts(data));
        }, [dispatch]);

    const onClear = useCallback(
        async () => {
           await dispatch(getProducts({ per_page: 6}));
        }, [dispatch]);

    return (
        <StyledWrap>
            <h1>Filter</h1>
            <Formik
                initialValues={{ title: '', price_from: '', price_to: '', from: '', to: '' }}
                onSubmit={onSubmit}
            >
                {({
                      values,
                      handleChange,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit} >
                        <label>
                            Name:
                            <input type="search"
                                   name="title"
                                   placeholder="Search for title..."
                                   value={values.title}
                                   onChange={handleChange}
                            />
                        </label>
                        <div>
                            <label>
                                Price:
                                <input
                                    type="text"
                                    name="price_from"
                                    placeholder="from..."
                                    value={values.price_from}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="price_to"
                                    placeholder="to..."
                                    value={values.price_to}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Date:
                                <input
                                    type="date"
                                    name="from"
                                    placeholder="from..."
                                    value={values.from}
                                    onChange={handleChange}
                                />
                                <input
                                    type="date"
                                    name="to"
                                    placeholder="to..."
                                    value={values.to}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button type="submit"> Ok </button>
                        <button type="button" onClick={onClear}> Clear </button>
                    </form>
                )}
            </Formik>
        </StyledWrap>
    );
}

export default FilterForm;
