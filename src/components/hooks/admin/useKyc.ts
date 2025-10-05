import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import type { AddKYC, KYCResponse } from "../../entities/kyc";
import { _adminGetKyc, _submitKyc } from "../../services/endpoints";
import toasterMaker from "../../helpers/toaster";
import { toaster } from "../../ui/toaster";
import type { ErrorResponse, PaginatedResponse } from "../../entities/response";
import useKYCQuery from "../../store/kycQuery";

const adminGetKyc = new APIClient<PaginatedResponse<KYCResponse>>(
  _adminGetKyc,
  "admin"
).getSingle;

const useAdminGetKYCs = () => {
  const { startDate, endDate, itemPerPage, slug } = useKYCQuery();

  return useInfiniteQuery({
    queryKey: ["getKyc", startDate, endDate, itemPerPage, slug],
    queryFn: ({ pageParam: page = 1 }) =>
      adminGetKyc({
        params: { page, itemPerPage, startDate, endDate, slug },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.data.hasNextPage ? lastPage.data.data.nextPage : undefined,
    retry: 2,
  });
};

const submitKyc = new APIClient<AddKYC>(_submitKyc, "user").addProperty;
const useSubmitKYC = () => {
  return useMutation({
    mutationFn: (val: AddKYC) => submitKyc(val),
    onSuccess: (data) =>
      toaster.create(toasterMaker("success", data.data.message)),
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

export { useAdminGetKYCs, useSubmitKYC };
