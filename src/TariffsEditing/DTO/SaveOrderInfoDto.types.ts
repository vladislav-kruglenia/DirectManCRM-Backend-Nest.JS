import { Direction } from '../Shemas/Orders.shema';

export type SaveOrderInfoDto = {
    userId: string,
    nameProject: string,
    directionsAndTariffs: Array<Direction>
}

