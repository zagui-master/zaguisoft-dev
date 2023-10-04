export const dissipatedAnimation = () =>
{
  const modal_dissipated = document.getElementById("modal_dissipated");

  setTimeout(() => {
		modal_dissipated.classList.add("dissipated-animation");
  }, 8500);
}