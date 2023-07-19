import React from 'react';
import './Select.css';
const settings = ['inexgroup', 'pridex', 'inexdigital'];

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    returnOptionTags() {
        const optionElements = settings.map((option, index) => (
            <option key={index}>{option}</option>
        ));
        return optionElements;
    }

    render() {
        const optionElements = this.returnOptionTags();
        return (
            <>
            <label forhtml="select">Выберите параметр:</label>
            <select id="select">
                {optionElements}
            </select>
            </>
        );
    }
}

export default Select;