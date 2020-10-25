const getObjectProperty = (obj, path, defaultValue = "") => {
  let pathArr = path.split(".");

  pathArr.every(element => {
    if (obj.hasOwnProperty(element)) {
      obj = obj[element];
      return true;
    } else {
      obj = undefined;
      return false;
    }
  });

  if (defaultValue && !obj) {
    return defaultValue;
  }
  return obj;
};

const obj = {
  pupa: {
    lupa: {
      beep: "boop"
    },
    foo: "bar"
  }
};

getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
