//-------------------------//-------------------------------//
// CLOSURES IN JS
// LEXICAL SCOPES

var username = "Hellohi";
//Globel scope

function local() {
  //local scope
  console.log(username);
}
local();
