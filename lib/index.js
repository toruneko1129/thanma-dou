"use strict";

module.exports = {
    rule:    require('./rule'),
    Shoupai: require('./shoupai'),
    Shan:    require('./shan'),
	Util:    Object.assign(require('./xiangting'),
                           require('./hule'))
}