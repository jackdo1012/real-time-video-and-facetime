export interface State {
    cam: boolean;
    mic: boolean;
    screen: boolean;
}

export const initialState: State = {
    cam: true,
    mic: true,
    screen: false,
};
