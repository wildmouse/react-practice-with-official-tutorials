import React, {useReducer} from 'react'

type State = {
    count: number
}

const initialState: State = {count: 0}

type Action =
    | { type: 'increment' }
    | { type: 'decrement' }

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}

export default Counter
