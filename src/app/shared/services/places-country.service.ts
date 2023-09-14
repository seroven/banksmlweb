import { Injectable } from "@angular/core";
import { ProvincesData } from "../data/provinces.data";
import { DistrictsData } from "../data/districts.data";
import { DistrictInterface, ProvinceByDistrictInterface, ProvinceInterface } from "../interfaces/place-country.interface";

@Injectable({
  providedIn: 'root'
})
export class PlacesCountryService {
  constructor(){}

  getProvinces():ProvinceByDistrictInterface[]{
    return ProvincesData;
  }

  getDistrict():DistrictInterface[]{
    return DistrictsData;
  }

  getDistrictByName(name:string):DistrictInterface|null{
    const districts = this.getDistrict();
    const districtFind = districts.filter(d => d.name == name);
    return districtFind ? districtFind[0] : null;
  }

  getProvinceByDistrict(id_ubigeo_district:number):DistrictInterface[]{
    const provinces = this.getProvinces();
    const provinceFind = provinces.find(p => p.id_ubigeo_district == id_ubigeo_district);
    return provinceFind ? provinceFind.provinces : [];
  }

  getProvinceByName(name:string):ProvinceInterface|null{
    const provinces = this.getProvinces();
    let provinceFind:ProvinceInterface|null = null;
    for (let province of provinces) {
      const tempProvince = province.provinces.find(p => p.name == name);
      if (tempProvince){
        provinceFind = tempProvince;
        break;
      }
    }
    return provinceFind ? provinceFind : null;
  }


}