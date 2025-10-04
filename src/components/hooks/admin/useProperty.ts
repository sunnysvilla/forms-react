import { useMutation, useQuery } from "@tanstack/react-query";
import type { Property, PropertyResponse } from "../../entities/property";
import APIClient from "../../services/api-client";
import {
  _adminAddProperty,
  _adminEditProperty,
  _adminGetProperty,
} from "../../services/endpoints";
import type { ErrorResponse } from "../../entities/response";
import toasterMaker from "../../helpers/toaster";
import { toaster } from "../../ui/toaster";

const getProperty = new APIClient<PropertyResponse>(_adminGetProperty, "admin")
  .get;
const useAdminGetProperty = () =>
  useQuery({
    queryKey: [],
    queryFn: getProperty,
  });

const addProperty = new APIClient<Property>(_adminAddProperty, "user").openPost;
const useAddProperty = () => {
  return useMutation({
    mutationFn: addProperty,
    onSuccess: (data) =>
      toaster.create(toasterMaker("success", data.data.message)),
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

const editProperty = new APIClient<Partial<Property>>(
  _adminEditProperty,
  "user"
).openPost;
const useEditProperty = () => {
  return useMutation({
    mutationFn: editProperty,
    onSuccess: (data) =>
      toaster.create(toasterMaker("success", data.data.message)),
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

export { useAdminGetProperty, useAddProperty, useEditProperty };
