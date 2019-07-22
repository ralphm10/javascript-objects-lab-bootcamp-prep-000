var recipes = {
  ingredients: "garlic"
};

function updateObjectWithKeyAndValue ()
{ 
  var object = {
    prop: "1"
  };
  object.prop2 = '2';
  return object;
}

function deleteFromObjectByKey (object,key)
{
  const myobject = Object.assign ({}, object)
  delete myobject[key]
    prop: "1"
  };
  delete object[prop];
  object;
}