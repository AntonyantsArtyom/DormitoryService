import { defineStore } from "pinia";
import { api } from "../../../api";

interface IAppoinment {
  id: string;
  startTime: string;
  endTime: string;
  bookingCount: number;
  limit: number;
  isBookedByMe: boolean;
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
    async getAppointments() {
      const res = await api.get<IAppoinment[]>(`schedules/available/timeslot/${this.filter?.date}/${this.filter?.page}`, {});
      this.appointments = res.data;
    },
  },
});
