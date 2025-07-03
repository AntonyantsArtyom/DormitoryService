import { defineStore } from "pinia";
import { api } from "../../../api";

interface IAppoinment {
  startTime: string;
  endTime: string;
  id: string;
  status: string;
  type: string;
  closable: boolean;
}

export interface IAppoinmentsState {
  appointments: IAppoinment[];
  loading: boolean;
}

export const useAppoinmentsStore = defineStore("appoinments", {
  state: (): IAppoinmentsState => ({
    appointments: [],
    loading: false,
  }),
  actions: {},
});
