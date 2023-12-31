// hooks/useClickOutsideHandler.ts
import { useEffect } from "react";

export function useClickOutsideHandler(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  excludeRefs: React.RefObject<HTMLElement>[] = []
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !excludeRefs.some((excludeRef) => excludeRef.current?.contains(event.target as Node))
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, excludeRefs]);
}
