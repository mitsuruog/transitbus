(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('pdfStore', pdfStore);

  function pdfStore($q, $timeout, $ionicLoading, $cordovaFile, $cordovaFileTransfer, $cordovaFileOpener2, $cordovaFileError, $exceptionHandler) {

    // Public API here
    var service = {
      preview: preview,
      isFileExist: isFileExist,
      download: download,
      open: open,
      removeAll: removeAll
    };

    return service;

    ////////////

    function preview(url) {
      var fileName = pickFileNameFromURL(url);
      var path = cordova.file.externalDataDirectory + 'pdf/';

      $ionicLoading.show({
        templateUrl: 'components/loading/loading.html',
        noBackdrop: true
      });

      isFileExist(path, fileName)
        .then(function(file) {
          if (file === null) {
            return download(url, path + fileName);
          } else {
            return file;
          }
        })
        .then(function(file) {
          return open(file.nativeURL);
        })
        .catch(function(err) {
          // ネットワーク切断の場合
          if($cordovaFileError[err.code] === 'ABORT_ERR') {
            $exceptionHandler({
              exception: 'インターネットに接続できません。'
            }, 'pdfStore');
          }else {
            throw err;
          }
        })
        .finally(function() {
          $ionicLoading.hide();
        });
    }

    function isFileExist(path, file) {
      var deferred = $q.defer();
      $cordovaFile.checkFile(path, file)
        .then(function(result) {
          deferred.resolve(result);
        }, function(err) {
          // [MEMO] {code: 1, message: "NOT_FOUND_ERR"}
          // NOT_FOUND_ERRの場合はダウンロード処理する
          if ($cordovaFileError[err.code] === 'NOT_FOUND_ERR') {
            deferred.resolve(null);
          } else {
            deferred.reject(err);
          }
        });
      return deferred.promise;
    }

    function download(url, filePath) {
      var deferred = $q.defer();
      var options = {};
      var trustHosts = true;
      $cordovaFileTransfer.download(url, filePath, options, trustHosts)
        .then(function(result) {
          // [MEMO]
          // {
          //   FileSystemfullPath: "/Android/data/com.ionicframework.<name>/files/034_1.pdf",
          //   isDirectory: false,
          //   isFile: true,
          //   name: "034_1.pdf",
          //   nativeURL: "file:///storage/emulated/0/Android/data/com.ionicframework.<name>/files/034_1.pdf"
          // }
          deferred.resolve(result);
        }, function(err) {
          deferred.reject(err);
        });
      return deferred.promise;
    }

    function open(filePath) {
      var deferred = $q.defer();
      $cordovaFileOpener2.open(filePath, 'application/pdf')
        .then(function() {
          deferred.resolve();
        }, function(err) {
          deferred.reject(err);
        });
      return deferred.promise;
    }

    function removeAll() {
      var deferred = $q.defer();
      $cordovaFile.removeRecursively(cordova.file.externalDataDirectory, 'pdf')
        .then(function(success) {
          deferred.resolve();
        }, function(err) {
          // フォルダが存在しない場合
          if($cordovaFileError[err.code] === 'NOT_FOUND_ERR') {
            deferred.resolve();
          }
          deferred.reject(err);
        });
      return deferred.promise;
    }

    function pickFileNameFromURL(url) {
      return url.match(".+/(.+?)([\?#;].*)?$")[1];
    }
  }

})();
