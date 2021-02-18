import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

export interface Props {
    searchUpdate: (value: string) => void;
    search: string;
}

const TodoSearch: React.FC<Props> = (props) => {

    const { searchUpdate, search } = props;

    const [value, setSearchValue] = React.useState(search);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const val = e.target.value;

        setSearchValue(val);

        searchUpdate(val);

    };

    return (
        <section data-test="component-todo-search">
            <FormGroup row>
                <Label className="col-2 col-form-label really-small-col">Search: </Label>
                <Col className="col-10 really-small-col">
                    <Input 
                        data-test="todo-search-input" 
                        onChange={handleChange} 
                        value={value} 
                    />
                </Col>
            </FormGroup>
        </section>
    );
};

export default TodoSearch;