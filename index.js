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

function deleteFromObjectByKey ()
{
  var object = {
    prop: "1"
  };
  object.prop = '2';
  return object;
}