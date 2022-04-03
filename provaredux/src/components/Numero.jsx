import React from "react"
import Card from "./Card"
import "./Numero.css"

import {connect} from "react-redux"
import {alterarNumeroInserido} from "../store/actions/numeros"

function Numero (props) {
    const {num} = props
    return(
        <Card title="Escolha um número:" red>
            <div className="Numero">
                <span>
                    <span>Número:</span>
                    <input type="number" value={num} onChange={e => props.alterarNumero(+e.target.value)}></input>
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterarNumero(novoNumero) {
            const action = alterarNumeroInserido(novoNumero)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Numero)