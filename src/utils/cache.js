async function syncStorageSave(
  key,
  data,
  createdOn = null,
  updateBy = null,
  updatedOn = null,
) {
  // eslint-disable-next-line no-undef
  const browserType = typeof browser === 'undefined' ? chrome : browser;
  const dataStruct = {
    data,
    createdOn,
    updatedOn,
    updateBy,
  };
  const hash = `Boxtab-${key}`;
  return browserType.storage.sync.set({
    [hash]: JSON.stringify(dataStruct),
  });
}

async function syncStorageRead(key) {
  // eslint-disable-next-line no-undef
  const browserType = typeof browser === 'undefined' ? chrome : browser;
  const existingData = await browserType.storage.sync
    .get(`Boxtab-${key}`)
    .then((data) => {
      if (!(`Boxtab-${key}` in data)) return null;
      return data[`Boxtab-${key}`];
    });
  return existingData ? JSON.parse(existingData) : null;
}

async function localStorageSave(
  key,
  data,
  createdOn = null,
  updateBy = null,
  updatedOn = null,
) {
  const dataStruct = {
    data,
    createdOn,
    updatedOn,
    updateBy,
  };
  localStorage.setItem(`Boxtab-${key}`, JSON.stringify(dataStruct));
}

async function localStorageRead(key) {
  const existingData = localStorage.getItem(`Boxtab-${key}`);
  return existingData ? JSON.parse(existingData) : null;
}

const isDevEnv = process.env.NODE_ENV === 'development';
export const cacheStorageRead = isDevEnv ? localStorageRead : syncStorageRead;
export const cacheStorageSave = isDevEnv ? localStorageSave : syncStorageSave;
