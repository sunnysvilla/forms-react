import { useMutation, useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import type { KYC, KYCResponse } from "../../entities/kyc";
import { _adminGetKyc, _submitKyc } from "../../services/endpoints";
import toasterMaker from "../../helpers/toaster";
import { toaster } from "../../ui/toaster";
import type { ErrorResponse } from "../../entities/response";

const adminGetKyc = new APIClient<KYCResponse>(_adminGetKyc, "admin").get;

const useAdminGetKYCs = () =>
  useQuery({
    queryKey: [],
    queryFn: adminGetKyc,
  });

const submitKyc = new APIClient<KYC>(_submitKyc, "user").openPost;
const useSubmitKYC = () => {
  return useMutation({
    mutationFn: submitKyc,
    onSuccess: (data) =>
      toaster.create(toasterMaker("success", data.data.message)),
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

export { useAdminGetKYCs, useSubmitKYC };
