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

function destructivelyUpdateObjectWithKeyAndValue ()
{
  var object = {
    prop: "1"
  };
  object.prop = '2';
  return object;
}