async function syncStorageSave(
  key,
  data,
  createdOn = null,
  updateBy = null,
  updatedOn = null,
) {
  const browserType = typeof browser === 'undefined' ? chrome : browser;
  const dataStruct = {
    data: data,
    createdOn: createdOn,
    updatedOn: updatedOn,
    updateBy: updateBy,
  };
  key = 'Boxtab-' + key;
  return await browserType.storage.sync.set({
    [key]: JSON.stringify(dataStruct),
  });
}

async function syncStorageRead(key) {
  const browserType = typeof browser === 'undefined' ? chrome : browser;
  let existingData = await browserType.storage.sync
    .get('Boxtab-' + key)
    .then(data => {
      if (!('Boxtab-' + key in data)) return null;
      else return data['Boxtab-' + key];
    });
  return await (existingData ? JSON.parse(existingData) : null);
}

async function localStorageSave(
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

async function localStorageRead(key) {
  const existingData = localStorage.getItem('Boxtab-' + key);
  return existingData ? JSON.parse(existingData) : null;
}

const isDevEnv = process.env.NODE_ENV == 'development';
export const cacheStorageRead = isDevEnv ? localStorageRead : syncStorageRead;
export const cacheStorageSave = isDevEnv ? localStorageSave : syncStorageSave;
