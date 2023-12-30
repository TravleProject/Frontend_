export const useHandleCheckbox = (e, setCheckbox, checkbox) => {
  const { name } = e.target;
  const isCheckboxChecked = checkbox.includes(name);
  if (isCheckboxChecked) {
    setCheckbox((prev) => prev.filter((item) => item !== name));
  } else {
    setCheckbox((prev) => [...prev, name]);
  }
  return checkbox;
};
