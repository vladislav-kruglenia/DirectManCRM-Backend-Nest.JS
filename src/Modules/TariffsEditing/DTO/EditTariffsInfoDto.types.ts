import { Direction } from '../Shemas/TariffsInfo.shema';

export type EditTariffsInfoDto = {
  directionsAndTariffs: Array<Direction>
}

export enum TariffInfoID {
  ID = "INDEX_GLOBAL_TARIFF_INFO"
}