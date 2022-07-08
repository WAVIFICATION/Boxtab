const brow = typeof browser === 'undefined' ? chrome : browser;
export async function cacheStorageSave(
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
  key = 'Boxtab-' + key;
  brow.storage.sync.set({ [key]: JSON.stringify(dataStruct) });
  return;
}

export async function cacheStorageRead(key) {
  let existingData = await brow.storage.sync.get('Boxtab-' + key).then(data => {
    // console.log(data)
    if (!('Boxtab-' + key in data)) return null;
    else return data['Boxtab-' + key];
  });
  console.log(key, ':', existingData);
  return existingData ? JSON.parse(existingData) : null;
}
