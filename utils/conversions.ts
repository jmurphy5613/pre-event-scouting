import { GamePieceCount } from "./types"


export const getTickLabels = (data: Array<GamePieceCount>) => {
    let labels: Array<number> = []
    for(const gamePieceCount of data) {
        labels.push(gamePieceCount.matchNumber)
    }
    return labels
}