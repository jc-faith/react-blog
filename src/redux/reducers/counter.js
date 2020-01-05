export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'add': return Object.assign({}, state, {
            count: state.count + action.count
        });
        default: return state;
    }
}

const initialState = {
    count: 0,
}