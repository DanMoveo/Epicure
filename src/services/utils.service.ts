export const objectToSearchParams = (
  obj: Record<string, string | number | string[] | number[]>
): URLSearchParams => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, String(item)));
      } else {
        params.append(key, String(value));
      }
    }
  }

  return params;
};