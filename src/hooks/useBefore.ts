import { useEffect } from "react";

/**
 * Custom hook to show a confirmation dialog before the user leaves the page,
 * either through refreshing, closing, or using the browser's back/forward buttons.
 * @param {boolean} shouldWarn - Determines if the warning should be active.
 */
export const useBeforeUnload = (shouldWarn: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (shouldWarn) {
        event.preventDefault();
        event.returnValue = ""; // Required for most browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldWarn]);
};

export const useBeforeBack = (shouldWarn: boolean) => {
  useEffect(() => {
    const handlePopState = () => {
      if (shouldWarn) {
        const confirmLeave = window.confirm(
          "Are you sure you want to leave this page? Progress may be lost. Log out instead."
        );
        if (!confirmLeave) {
          window.history.pushState(null, "", window.location.href);
        } else {
          localStorage.clear();

          window.location.href = `/game-map`;
        }
      }
    };

    window.addEventListener("popstate", handlePopState);

    if (shouldWarn) {
      window.history.pushState(null, "", window.location.href);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [shouldWarn]);
};
