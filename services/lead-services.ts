import { ApiService } from '@/services/api-services';
import moment from 'moment';

export class LeadService {

  public getExecutivesData = async (setExecutivesOption: any, token: string) => {
      try {
        const ApiServices = new ApiService();
        const response = await ApiServices.getExecutives(token);
        const executivesOption = this.createSelectData(response.data.Data.Data);
        setExecutivesOption(executivesOption);
      } catch (error) {
        console.error('Error fetching executives:', error);
      }
    };



  public createSelectData = (items: any): any => {
    const selectOptions: any = [];
    items.map((item: any) => {
      const newItem = { ...item, value: item.name, label: item.name };
      selectOptions.push(newItem);
    });
    return selectOptions;
  };

  public getLeadsData = async (setLeadsData:any, token: string) => {
    try {
      const ApiServices = new ApiService();
      const response = await ApiServices.getLeads(token);
      console.log(response);
      const data = response.data.Data.Data;
      setLeadsData(data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };
 
}
