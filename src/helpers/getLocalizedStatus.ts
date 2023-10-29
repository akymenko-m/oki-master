import { IOrderStatus } from '../interfaces/orderStatus.interface';

function getLocalizedStatus(status: string, statusData: IOrderStatus[]) {
  const foundStatus = statusData.find((item) => item.status === status);
  return foundStatus ? foundStatus.name : status;
}

export default getLocalizedStatus;
