export interface IData {
    name: string;
    color: string;
    id: number;
}
export interface ICar {
    name: string;
    color: string;
}
export interface IMove {
    id: number;
    velocity: number;
    distance: number;
}
export interface IResalt {
    id: number;
    result: number;
}
export interface IWinners {
    id: number;
    wins: number;
    time: number;
}
export interface IWinnersShared {
    id: number;
    result: number;
    color: string;
    name: string;
}
export interface IWinnersFull {
    id: number;
    wins: number;
    time: number;
    name: string;
    color: string;
}
