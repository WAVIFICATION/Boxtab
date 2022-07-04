export function cacheStorageSave(
  key,
  data,
  createdOn = null,
  updateBy = null,
  updatedOn = null,
) {
  const dataStruct = {
    data: data,
    createdOn: createdOn,
    updatedOn: updatedOn,
    updateBy: updateBy,
  };
  localStorage.setItem('Boxtab-' + key, JSON.stringify(dataStruct));
}

export function cacheStorageRead(key) {
  const existingData = localStorage.getItem('Boxtab-' + key);
  return existingData ? JSON.parse(existingData) : null;
}