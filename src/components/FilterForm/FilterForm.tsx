import React from 'react';

const FilterForm = () => {

    return (
        <>
            <h1>Filter</h1>
            <form>
                <label>
                    Search:
                    <input type="search" name="name" placeholder="Search for..."/>
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
