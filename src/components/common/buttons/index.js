import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../../../styles/spinner.scss';
export default (props) => {
  return (
    props.isDisabled ? null :
      <button
        style={{ pointerEvents: props.isProcessing ? 'none' : 'initial' }}
        className={'btn btn-danger ' + props.className}
        onClick={props.onClick}>
        {props.isProcessing ? <Loader /> : props.txt}
        {props.isProcessing ? null : props.children}

      </button>
  )
}

export const LinkButton = (props) => {
  const st = { border: '0px', padding: '10px' };
  return (
    props.isDisabled ? null : <a href={props.href} className={'btn red ' + props.className} style={st} target="_blank">{props.txt}</a>
  )
}


export const ButtonCancel = (props) => {
  return (
    <button
      className={'btn blck ' + props.className}
      onClick={props.handler}>
      {props.children}
    </button>
  )
}

export const Loader = () => {
  return (
    <div className="spinner" >
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  )
}

export const Button = (props) => {
  return (
    props.isDisabled ? null :
      <RaisedButton
        primary={true}
        onTouchTap={() => props.onClick()}
      >
        {props.isProcessing ? <Loader /> : props.children}
      </RaisedButton>
  )
}

