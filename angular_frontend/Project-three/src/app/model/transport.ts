export interface Transport {
  transportId?: number;
  type: string;
  provider: string;
  availableSeat: number;
  price: number;
}
