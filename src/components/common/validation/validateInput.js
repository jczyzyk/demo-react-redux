import React, { PropTypes } from 'react';
import { isNumber, isEmail, isUrl } from '../../../utils/validation';
import errorMessages from '../../../constants/errorMessages';

export class ValidateInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: '', value: '', isValid: !props.required };
    }

    onChange(e) {
        this.setState({ error: '', value: e.target.value });
    }
    componentDidMount() {
        this.setState({ validate: this.validate.bind(this) });
    }
    validate() {
        if (this.props.required) {
            if (this.state.value.length === 0) {
                let errorMsg = errorMessages.ERROR_REQUIRED_FIELD;
                if (this.props.name) {
                    errorMsg = errorMessages.ERROR_REQUIRED_GENERIC + ' ' + this.props.name;
                }
                this.setState({ isValid: false, error: errorMsg })
                return false;
            }
        }
        if (this.props.minLength && isNumber(this.props.minLength)) {
            if (this.state.value.length < this.props.minLength) {
                this.setState({ isValid: false, error: errorMessages.ERROR_PASSWORD_MINLENGTH })
                return false;
            }
        }

        if (this.props.type === 'email') {
            if (!isEmail(this.state.value)) {
                this.setState({ isValid: false, error: errorMessages.ERROR_INVALID_EMAIL })
                return false;
            }
        }
        if (this.props.type === 'url') {
            if (!isUrl(this.state.value)) {
                this.setState({ isValid: false, error: errorMessages.ERROR_INVALID_URL })
                return false;
            }
        }
        if (this.props.compareTo && this.state.value !== this.props.compareTo.state.value) {
            this.setState({ isValid: false, error: errorMessages.ERROR_NOT_MATCH })
            return false;
        }
        this.setState({ isValid: true });
        return true;
    }

    onKeyPress(e) {
        if (typeof this.props.onKeyPress === 'function') {
            this.props.onKeyPress(e);
        }
    }

    render() {
        let st = {
            'display': (this.state.error.length > 0)
                ? 'block'
                : 'none'
        }
        return (
            <div style={{ width: '100%' }}>
                <div className={this.props.className}>
                    <input type={this.props.type}
                        onChange={(e) => this.onChange(e)}
                        className='form-control'
                        onBlur={(e) => this.validate(e)}
                        onKeyPress={(e) => this.onKeyPress(e)}
                        value={this.state.value}
                        placeholder={this.props.placeholder}
                    />

                </div>
                <div className='errorMsg' style={st}>
                    {this.state.error}
                </div>
            </div>
        )
    }
}

ValidateInput.propTypes = {
    type: PropTypes.string.isRequired,
    minLength: PropTypes.number
};


