import React from "react"
import Card from "./Card"

import {connect} from "react-redux"

function Recesso (props) {
    const {num} = props
    return (
        <Card title="Está chegando..." yellow>
            <div>
                <span>
                    <span>{"Estarei de recesso em "} {num} {" dias."}</span>
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

export default connect(mapStateToProps)(Recesso)