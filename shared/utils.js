const getErrorMessage = (error) => {
  if (error instanceof Error) {
    return error.message || "An error occured";
  }

  if (error && typeof error === "object" && "message" in error) {
    return String(error.message);
  }

  if (typeof error === "string") {
    return error || "An error occured";
  }

  return "An error occured";
}

module.exports = {getErrorMessage};