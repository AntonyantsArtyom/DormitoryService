import { defineStore } from "pinia";
import { api } from "../../../api";

export type TSession = {
  id: string;
  accessToken: string;
};

export type TUser = {};

export interface IUserState {
  session: TSession | null;
  user: IUser | null;
  loading: boolean;
}

type TCertificate = "CERTIFICATE" | "FLUOROGRAPHY";

interface IMedicalCertificate {
  id: string;
  user: string;
  type: TCertificate;
  startDate: string;
  endDate: string;
}

interface IEvent {
  startTime: string;
  endTime: string;
  id: string;
  status: string;
  type: string;
  closable: boolean;
}

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  roomNumber: string;
  role: string[];
  balance: number;
  pediculosis: IMedicalCertificate;
  fluorography: IMedicalCertificate;
  activeEvents: IEvent[];
}

export const useUserStore = defineStore("user", {
  state: (): IUserState => ({
    session: null,
    user: null,
    loading: false,
  }),

  actions: {
    async login(email: string, password: string) {
      this.loading = true;
      try {
        const res = await api.post<TSession>("/sessions", { email, password });
        localStorage.setItem("accessToken", res.data.accessToken);
        this.session = res.data;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      localStorage.removeItem("accessToken");
    },
    async getWholeUser() {
      this.loading = true;
      try {
        const res = await api.get<IUser>("api/get/whole/user");
        this.user = res.data;
      } finally {
        this.loading = false;
      }
    },
    async deleteActiveEvent(eventId: string) {
      this.loading = true;
      try {
        await api.patch(`/bookings/cancel/${eventId}`);
        await this.getWholeUser();
      } catch (error) {
      } finally {
        this.loading = false;
      }
    },
  },
});
