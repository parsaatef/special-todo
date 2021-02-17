import React from 'react';
import { Input } from 'reactstrap';

export interface Props {
    searchUpdate: (value: string) => void;
    search: string;
}

const TodoSearch: React.FC<Props> = (props) => {

    const { searchUpdate, search } = props;

    const [value, setSearchValue] = React.useState(search);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value;

        setSearchValue(value);

        searchUpdate(value);

    };

    return (
        <section data-test="component-todo-search">
            <Input 
                data-test="todo-search-input" 
                onChange={handleChange} 
                value={value} 
            />
        </section>
    );
};

export default TodoSearch;