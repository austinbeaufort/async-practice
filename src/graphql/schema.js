const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type Stats {
        dev: Int
        mode: Int
        nlink: Int
        uid: Int
        gid: Int
        rdev: Int
        blksize: Int
        ino: Int
        size: Int
        blocks: Int
        atimeMs: Float
        mtimeMs: Float
        ctimeMs: Float
        birthtimeMs: Float
        atime: String
        mtime: String
        ctime: String
        birthtime: String
    }

    type Photos {
        albumId: Int
        id: Int
        title: String
        url: String
        thumbnailUrl: String
    }

    type Query {
        getFile: String
        getPhotos: [Photos]
        
    }
`)

module.exports = schema;