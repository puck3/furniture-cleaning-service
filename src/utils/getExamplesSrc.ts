const getExamplesSrc = async () => {
  const res = await fetch("/api/examples");
  if (!res.ok) {
    throw new Error(`Ошибка HTTP: ${res.status}`);
  }
  return await res.json();
};

export default getExamplesSrc;
