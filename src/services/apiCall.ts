export interface ApiCallProps {
  isFetchable?: boolean;
  url: string;
  options?: RequestInit;
}

export const makeApiCall = async <T>({
  url,
  options,
}: ApiCallProps): Promise<T> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      const data = (await response.json()) as T;
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error as Error;
  }
};
