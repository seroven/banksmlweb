interface PlaceInterface{
  id_ubigeo:number;
  name:string;
}

export interface DistrictInterface extends PlaceInterface{}
export interface ProvinceInterface extends PlaceInterface{}

export interface ProvinceByDistrictInterface {
  id_ubigeo_district: number;
  provinces: ProvinceInterface[];
}