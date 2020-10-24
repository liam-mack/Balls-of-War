import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div>
                <input 
                    className='input'
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={ (e) => this.props.onChange(e.target.value) }
                />
            </div>
        )
    }
}

export default Input