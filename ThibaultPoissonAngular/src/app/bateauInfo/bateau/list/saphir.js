/* ***********************************************************
 * TIG - Le bateau de Thibault.
 * Copyright (C) 2018 <Binh-Minh.Bui-Xuan@ens-lyon.org>.
 * GPL version>=3 <http://www.gnu.org/licenses/>.
 * $Id: BateauThibault/app/src/views/bateau/list/saphir.js updated 2020-03-03 buixuan.
 * ***********************************************************/
var frameModule = require("ui/frame");
frameModule.topmost().ios.navBarVisibility = "never";

var page;
exports.loaded = function(args) {
  page=args.objects;
};

var gestures = require("ui/gestures");
exports.swipeListenner = function(args) {
  if (args.direction == gestures.SwipeDirection.right) { frameModule.goBack(); };
};
