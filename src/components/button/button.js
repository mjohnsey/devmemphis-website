import React from "react"
import buttonStyle from "./button.module.scss"

const Button = props => <a className={[buttonStyle.btnRed,buttonStyle.btn].join(' ')} href={props.link}>{props.linkText}</a>

export default Button