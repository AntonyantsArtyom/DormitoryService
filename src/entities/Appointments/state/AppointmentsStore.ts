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

interface IFilter {
  page: string;
  date: string;
}

export interface IAppoinmentsState {
  filter: IFilter | null;
  appointments: IAppoinment[];
  loading: boolean;
}

export const useAppoinmentsStore = defineStore("appoinments", {
  state: (): IAppoinmentsState => ({
    filter: null,
    appointments: [],
    loading: false,
  }),
  actions: {
    setFilters(filter: IFilter) {
      this.filter = filter;
    },
  },
});
