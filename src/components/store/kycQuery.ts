import { create } from "zustand";

export interface KYCQuery {
  startDate: string;
  endDate: string;
  slug: string;
  itemPerPage: number;
}

interface KYCSetQuery {
  setStartDate: (date: Date | string) => void;
  setEndDate: (date: Date | string) => void;
  setSlug: (date: string) => void;
  setItemPerPage: (page: number) => void;
}

const useKYCQuery = create<KYCQuery & KYCSetQuery>((set) => ({
  startDate: "",
  endDate: "",
  slug: "",
  itemPerPage: 4,

  setStartDate: (date) => set({ startDate: String(date) }),
  setEndDate: (date) => set({ endDate: String(date) }),
  setSlug: (slug) => set({ slug }),
  setItemPerPage: (itemPerPage) => set({ itemPerPage }),
}));

export default useKYCQuery;
