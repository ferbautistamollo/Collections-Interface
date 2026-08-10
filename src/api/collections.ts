"use server";

import { ResponseData } from "@/utils/interfaces";
import { apiClient } from "@/services";

export const getForCreatingSale = async (
  personUuid: string,
): Promise<ResponseData> => {
  try {
    const response = await apiClient.GET(`sales/${personUuid}/forCreatingSale`);
    const data = await response.json();

    if (!response.ok) {
      return {
        error: true,
        message: "Ocurrió un error",
        data: response.statusText,
      };
    }

    return {
      error: data.error,
      message: data.message,
      data: data.data,
    };
  } catch (error: any) {
    return {
      error: true,
      message: "Error al obtener datos de la persona: " + error.message,
      data: error.message,
    };
  }
};
