import { Business } from "../types/business.types";
import { LinkedResponse } from "../types/response.types";
import { useAxios } from "./useAxios";

export function useBusiness(id?: string | null) {
  const data = useAxios<LinkedResponse<Business>>({
    url: `business/${id || "random"}`,
  });

  return data;
}
