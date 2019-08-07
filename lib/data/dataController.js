"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var util = require('util');

var fs = require('fs');

var axios = require('axios');

var root = {
  findFile: function () {
    var _findFile = _asyncToGenerator(function* () {
      var readFile = util.promisify(fs.readFile);
      return readFile('./helloworld.txt', 'utf-8');
    });

    function findFile() {
      return _findFile.apply(this, arguments);
    }

    return findFile;
  }(),
  settleData: function () {
    var _settleData = _asyncToGenerator(function* () {
      var textString = yield root.findFile();
      return textString;
    });

    function settleData() {
      return _settleData.apply(this, arguments);
    }

    return settleData;
  }(),
  getFile: () => {
    return root.settleData();
  },
  fetchPhotos: function () {
    var _fetchPhotos = _asyncToGenerator(function* () {
      var photoObject = yield axios.get('https://jsonplaceholder.typicode.com/photos');
      return photoObject.data;
    });

    function fetchPhotos() {
      return _fetchPhotos.apply(this, arguments);
    }

    return fetchPhotos;
  }(),
  getPhotos: () => {
    return root.fetchPhotos();
  }
};
module.exports = root;