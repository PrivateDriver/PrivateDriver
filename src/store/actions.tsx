export const ACTION_TYPE = 'ACTION_TYPE';

export const actionCreator = (payload) => {
    return {
        type: ACTION_TYPE,
        payload,
    };
};