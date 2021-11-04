import React from 'react';
import './select.css';


class SelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleSelect(this.props.value, this.props.text);
    }

    render() {
        return (
            <li className={this.props.className} value={this.props.value} onClick={this.handleClick}>{this.props.text}</li>
        )
    }

}

export class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {opened: false, value: null, text: null};
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleClick() {
        this.setState({opened: !this.state.opened});
    }

    handleSelect(value, text) {
        this.setState({value: value, text: text});
    }

    render() {
        return (
            <div className="select" onClick={this.handleClick}>
                <input className="select__input" type="hidden"/>
                <div className={(this.state.opened === false) ? 'select__head' : 'select__head open'}>
                    { (this.state.text === null) ? 'Выберите' : this.state.text }
                </div>
                <ul className={(this.state.opened === false) ? 'select__list' : 'select__list open'}>
                    {
                        this.props.items.map(
                            (item) => <SelectItem className="select__item" value={item.value} text={item.text} handleSelect={this.handleSelect}/>
                        )
                    }
                </ul>
            </div>
        )
    }

}