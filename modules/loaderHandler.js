export function showLoading(isLoading) {
  const resultField = document.getElementById("loading");
  return isLoading
    ? resultField.classList.toggle("show-loader")
    : resultField.classList.remove("show-loader");
}
