"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var mini_simulator_1 = window.MiniSimulator;
var simulatorContainer = document.querySelector(".simulatorContainer");
var simulator;
var prevPath = "";
var DEFAULT_STYLE =
  "width:390px; height:740px; position:fixed; top:120px; right:50px";
var DISAPPEAR_STYLE =
  "width:390px; height:740px; position:fixed; top:120px; right:50px; display:none";
function debounce(fn, delay) {
  var _this = this;
  var timer = null;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var context = _this || window;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
function reLaunch(path) {
  if (simulator && prevPath !== path) {
    simulator.evaluateJavaScriptInWorker(
      'my.reLaunch({url:"/'.concat(path, '"})')
    );
    prevPath = path;
  }
}
function proxyHistory(method) {
  var originFn = window.history[method];
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (window.location.pathname && window.location.pathname.startsWith("/components")) {
      simulatorContainer.style = DEFAULT_STYLE;
    } else {
      console.log(window.location)
      simulatorContainer.style = DISAPPEAR_STYLE;
    }

    originFn.apply(this, args);
  };
}
["back", "go", "forward", "pushState", "replaceState"].forEach(function (fn) {
  var method = fn;
  window.history[method] = proxyHistory(method);
});
var debounceReLaunch = debounce(reLaunch, 150);

function genSimulator(){
  if (!simulatorContainer) {
    simulatorContainer = document.createElement("div");
    simulatorContainer.id = "simulatorContainer";
    simulatorContainer.className = "simulatorContainer";
    simulatorContainer.style = DEFAULT_STYLE;
    var body = document.querySelector("body");
    body.appendChild(simulatorContainer);
  }
}

exports.default = function (props) {
  genSimulator()
  debounceReLaunch(props.pages);
  var _a = (0, react_1.useState)({ width: 395, height: 740 }),
    lyraSize = _a[0],
    setLyraSize = _a[1];
  (0, react_1.useEffect)(
    function () {
      var propsDeferer = new Promise(function (resolve) {
        if (process.env.NODE_ENV === "development") {
          resolve({ appCdnBaseUrl: props.appCdnBaseUrl });
        } else {
          resolve({
            appCdnBaseUrl:
              "https://mdn.alipayobjects.com/yaoyy/uri/file/as/apwallet/1648618490590/2021003121607088/",
          });
        }
      });

      propsDeferer.then(function (launchProps) {
        if (simulator) return;
        simulator = (0, mini_simulator_1.mount)(
          __assign(
            {
              container: "simulatorContainer",
              hideStatusBar: true,
              theme: "light",
              hideTopBar: true,
              hideBottomBar: true,
              defaultDeviceName: "iPhone 13",
              internalStorageSeparatedKey: "umi",
              clearStore: true,
              initWithAutoZoom: true,
              transparentBackground: true,
              launchParams: {
                page: props.pages,
                appxRouteFramework: "YES",
              },
              enablePreview: true,
              beforeDevicePreview: function (params) {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return [
                      2 /*return*/,
                      {
                        appCdnBaseUrl: params.appCdnBaseUrl,
                        launchParams: __assign(
                          __assign({}, params.launchParams),
                          { page: props.pages }
                        ),
                      },
                    ];
                  });
                });
              },
            },
            launchProps
          )
        );
      });
    },
    [props.appCdnBaseUrl]
  );
  return react_1.default.createElement("div", {
    id: "lyra-service-container",
    style: lyraSize,
  });
};
