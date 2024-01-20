export type CounterAction = 
| { type: 'increaseBy', payload: {value: number}} 
| { type: 'reset' }

// // Action creator 
// export const doReset = (): CounterAction => {
//     return {
//         type: 'reset'
//     }
// }

// Action creator con return implícito
export const doReset = (): CounterAction => ({
    type: 'reset'
})


// action creator
export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: {
        value
    }
})