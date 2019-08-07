"use strict";

var {
  buildSchema
} = require('graphql');

var schema = buildSchema("\n\n    type Stats {\n        dev: Int\n        mode: Int\n        nlink: Int\n        uid: Int\n        gid: Int\n        rdev: Int\n        blksize: Int\n        ino: Int\n        size: Int\n        blocks: Int\n        atimeMs: Float\n        mtimeMs: Float\n        ctimeMs: Float\n        birthtimeMs: Float\n        atime: String\n        mtime: String\n        ctime: String\n        birthtime: String\n    }\n\n    type Photos {\n        albumId: Int\n        id: Int\n        title: String\n        url: String\n        thumbnailUrl: String\n    }\n\n    type Query {\n        getFile: String\n        getPhotos: [Photos]\n        \n    }\n");
module.exports = schema;