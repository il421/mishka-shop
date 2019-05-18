# mishka
A part of a project. 
I was responsible for some pages. Used HTML, CSS, LESS. The project is responsive/adaptive.<br /> 
!!! All images are loaded according to a screen resolution.

In order to run:
npm install<br />
npm -g install gulp-cli<br />
npm run build && gulp serve<br /><br />

Or just open build/ and open index.html in a browser

Possible problem:
gulp build
gulp[17053]: ../src/node_contextify.cc:631:static void node::contextify::
ContextifyScript::New(const FunctionCallbackInfo<v8::Value> &): Assertion 
`args[1]->IsString()' failed.

Solution is delete node_modules dir and package-lock.json.
Then run npm install --unsafe-perm=true
