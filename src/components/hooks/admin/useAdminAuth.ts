import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import token_key from "../../constants/token_key";
import type { AdminLogin, ChangePassword } from "../../entities/credentials";
import type { TokenResponse, ErrorResponse } from "../../entities/response";
import toasterMaker from "../../helpers/toaster";
import APIClient from "../../services/api-client";
import { _adminChangePassword, _adminLogin } from "../../services/endpoints";
import { toaster } from "../../ui/toaster";

const adminLogin = new APIClient<AdminLogin>(_adminLogin, "admin").openPost;
const adminChangePassword = new APIClient<ChangePassword>(
  _adminChangePassword,
  "admin"
).post;

const useAdminLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: adminLogin,
    onSuccess: (data: TokenResponse) => {
      localStorage.setItem(token_key["admin"], data.data.token);
      toaster.create(toasterMaker("success", data.data.message));
      navigate("/");
    },
    onError: (err: ErrorResponse) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

const useAdminChangePassword = (callback: () => void) => {
  const navigate = useNavigate();

  return useMutation<TokenResponse, ErrorResponse, ChangePassword>({
    mutationFn: (data) => adminChangePassword(data),
    onSuccess: (data) => {
      toaster.create(toasterMaker("success", data.data.message));
      toaster.create(
        toasterMaker("success", "Please login with your new password!")
      );
      navigate("/login/admin");
      callback();
      localStorage.setItem(token_key["admin"], data.data.token);
    },
    onError: (err) =>
      toaster.create(toasterMaker("error", err.response?.data.error)),
  });
};

export { useAdminChangePassword, useAdminLogin };
