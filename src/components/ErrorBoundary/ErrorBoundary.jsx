import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import ErrorIndicator from "../ErrorIndicator";

export const ErrorBoundaryWrapper = ({ children }) => {
  const handleError = (error, errorInfo) => {
    console.error("Error captured:", error, errorInfo);
    // Do something with the error
    // E.g. log to an error logging client here
  };

  const fallbackRender = ({ error, resetErrorBoundary }) => (
    <div>
      <ErrorIndicator error={error} />
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );

  return (
    <ErrorBoundary
      fallbackRender={fallbackRender}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};
