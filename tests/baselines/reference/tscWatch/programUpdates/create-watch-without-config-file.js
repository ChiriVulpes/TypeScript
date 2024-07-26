currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/user/username/workspace/projects/project/c/app.ts]

                import {f} from "./module"
                console.log(f)
                

//// [/user/username/workspace/projects/project/c/module.d.ts]
export let x: number

//// [/home/src/tslibs/ts/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/home/src/tslibs/ts/lib/tsc.js -w /user/username/workspace/projects/project/c/app.ts
Output::
>> Screen clear
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

[96muser/username/workspace/projects/project/c/app.ts[0m:[93m2[0m:[93m25[0m - [91merror[0m[90m TS2305: [0mModule '"./module"' has no exported member 'f'.

[7m2[0m                 import {f} from "./module"
[7m [0m [91m                        ~[0m

[96muser/username/workspace/projects/project/c/app.ts[0m:[93m3[0m:[93m17[0m - [91merror[0m[90m TS2584: [0mCannot find name 'console'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'.

[7m3[0m                 console.log(f)
[7m [0m [91m                ~~~~~~~[0m

[[90mHH:MM:SS AM[0m] Found 2 errors. Watching for file changes.



//// [/user/username/workspace/projects/project/c/app.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = require("./module");
console.log(module_1.f);



FsWatches::
/home/src/tslibs/ts/lib/lib.d.ts: *new*
  {}
/user/username/workspace/projects/project/c/app.ts: *new*
  {}
/user/username/workspace/projects/project/c/module.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/workspace: *new*
  {}

Program root files: [
  "/user/username/workspace/projects/project/c/app.ts"
]
Program options: {
  "watch": true
}
Program structureReused: Not
Program files::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/c/module.d.ts
/user/username/workspace/projects/project/c/app.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts
/user/username/workspace/projects/project/c/module.d.ts
/user/username/workspace/projects/project/c/app.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/workspace/projects/project/c/module.d.ts (used version)
/user/username/workspace/projects/project/c/app.ts (used version)

exitCode:: ExitStatus.undefined
