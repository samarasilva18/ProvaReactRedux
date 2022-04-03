import React from "react"
import Card from "./Card"

import {connect} from "react-redux"

function Sorteio (props) {
    const {num} = props
    const zero = 0
    const aleatorio = parseInt(Math.random() * (num + (zero + 1)))
    return (
        <Card title="Sorteio dos Números de 0 a N" yellow>
            <div>
                <span>
                    <span>Resultado: {aleatorio}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Sorteio)