import { useNavigate, useLocation, useSearchParams } from "react-router";

export function useRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  function navigateTo(path: string) {
    navigate(path);
  }

  function getQueryParam(key: string): string | null {
    return searchParams.get(key);
  }

  function setQueryParam(key: string, value: string, replace = true) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(key, value);
    setSearchParams(newSearchParams, { replace });
  }

  function updateQueryParams(params: Record<string, string | number>, replace = true) {
    const newSearchParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      newSearchParams.set(key, String(value));
    });
    setSearchParams(newSearchParams, { replace });
  }

  return {
    currentPath: location.pathname,
    navigateTo,
    getQueryParam,
    setQueryParam,
    updateQueryParams,
    searchParams,
  };
}
