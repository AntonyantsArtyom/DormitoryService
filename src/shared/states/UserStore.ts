// stores/user.ts
import { defineStore } from "pinia";
import { api } from "../../api";

export type TUser = {
  id: string;
  accessToken: string;
};

export interface IUserState {
  user: TUser | null;
  loading: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): IUserState => ({
    user: null,
    loading: false,
  }),

  actions: {
    async login(email: string, password: string) {
      this.loading = true;
      try {
        const res = await api.post<TUser>("/sessions", { email, password });
        localStorage.setItem("accessToken", res.data.accessToken);
        this.user = res.data;
      } finally {
        this.loading = false;
      }
    },
  },
});
