
export const LogReducer = (state = 'no-auth', action) => {

    switch (action.type) {
        case 'login':
            return 'auth';
        case 'logout':
            return 'no-auth';

        default:
            return state;
    };
};
