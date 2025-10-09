import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import useKYCQuery from "../../store/kycQuery";

const getProperty = new APIClient<PropertyResponse>(_adminGetProperty, "admin")
  .get;
const useAdminGetProperty = () => {
  const { setSlug } = useKYCQuery();

  return useQuery({
    queryKey: ["properties"],
    queryFn: () =>
      getProperty().then((res) => {
        setSlug(res.data.data[0].slug);
        return res;
      }),
    retry: 2,
    refetchOnWindowFocus: false,
  });
};

const addProperty = new APIClient<Property>(_adminAddProperty, "admin")
  .addProperty;
const useAddProperty = (callback: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Property) => addProperty(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      toaster.create(toasterMaker("success", data.data.message));
      callback();
    },
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

const editProperty = (id: string, data: Partial<Property>) =>
  new APIClient<Partial<Property>>(`${_adminEditProperty}/${id}`, "admin").put(
    data
  );

const useEditProperty = (id: string, callback: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Property>) => editProperty(id, data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });

      toaster.create(toasterMaker("success", data.data.message));
      callback();
    },
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

export { useAdminGetProperty, useAddProperty, useEditProperty };
