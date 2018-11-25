function PolyfillCreateObject (proto) {
  function CreateObj (){};
  CreateObj.prototype = proto;
  return new CreateObj();
}
