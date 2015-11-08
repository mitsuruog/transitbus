(function() {
  'use strict';

  angular.module('transitbus.services')
    .factory('Seeds', Seeds);

  function Seeds() {

    //////////////

    var stops = [{
      'name': 'あ',
      'stops': [{
        'name': '相の川',
        'kana': 'あいのかわ',
        'id': '1',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/001_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/001_2.pdf'
        }]
      }, {
        'name': '新井',
        'kana': 'あらい',
        'id': '2',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/002_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/002_2.pdf'
        }]
      }, {
        'name': '新井三丁目',
        'kana': 'あらいさんちょうめ',
        'id': '3',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/003_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/003_2.pdf'
        }]
      }, {
        'name': '新井新田',
        'kana': 'あらいしんでん',
        'id': '4',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/004_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/004_2.pdf'
        }]
      }]
    }, {
      'name': 'い',
      'stops': [{
        'name': '伊勢宿',
        'kana': 'いせじゅく',
        'id': '5',
        'timetables': [{
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/005_1.pdf'
        }, {
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/005_2.pdf'
        }]
      }, {
        'name': '市川駅',
        'kana': 'いちかわえき',
        'id': '6',
        'timetables': [{
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/006_1.pdf'
        }]
      }, {
        'name': '市川塩浜駅',
        'kana': 'いちかわしおはまえき',
        'id': '7',
        'timetables': [{
          'direction': '富浜・妙典駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/007_1.pdf'
        }, {
          'direction': '浦安駅・ハイタウン塩浜第一　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/007_2.pdf'
        }]
      }, {
        'name': '市川市斎場',
        'kana': 'いちかわしさいじょう',
        'id': '8',
        'timetables': [{
          'direction': '浦安駅・ハイタウン塩浜第一　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/008_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/008_2.pdf'
        }]
      }, {
        'name': '一本松',
        'kana': 'いっぽんまつ',
        'id': '9',
        'timetables': [{
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/009_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/009_2.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/009_3.pdf'
        }]
      }]
    }, {
      'name': 'う',
      'stops': [{
        'name': 'ヴェレーナシティ行徳',
        'kana': 'う゛ぇれーなしてぃぎょうとく',
        'id': '102',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/102_1.pdf'
        }]
      }, {
        'name': '浦安駅',
        'kana': 'うらやすえき',
        'id': '10',
        'timetables': [{
          'direction': '本八幡駅・行徳駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/010_1.pdf'
        }]
      }, {
        'name': '浦安駅西口',
        'kana': 'うらやすえきにしぐち',
        'id': '11',
        'timetables': [{
          'direction': '本八幡駅・行徳駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/011_1.pdf'
        }]
      }, {
        'name': '浦安警察署',
        'kana': 'うらやすけいさつしょ',
        'id': '12',
        'timetables': [{
          'direction': '本八幡駅・ハイタウン塩浜第一　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/012_1.pdf'
        }, {
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/012_2.pdf'
        }]
      }]
    }, {
      'name': 'え',
      'stops': []
    }, {
      'name': 'お',
      'stops': [{
        'name': '大洲三丁目',
        'kana': 'おおすさんちょうめ',
        'id': '13',
        'timetables': [{
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/013_1.pdf'
        }, {
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/013_2.pdf'
        }]
      }, {
        'name': '大洲町',
        'kana': 'おおすちょう',
        'id': '14',
        'timetables': [{
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/014_1.pdf'
        }, {
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/014_2.pdf'
        }]
      }, {
        'name': '大洲防災公園',
        'kana': 'おおすぼうさいこうえん',
        'id': '15',
        'timetables': [{
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/015_1.pdf'
        }, {
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/015_2.pdf'
        }]
      }, {
        'name': '大洲郵便局',
        'kana': 'おおすゆうびんきょく',
        'id': '16',
        'timetables': [{
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/016_1.pdf'
        }, {
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/016_2.pdf'
        }]
      }, {
        'name': '大和田兜橋',
        'kana': 'おおわだかぶとばし',
        'id': '17',
        'timetables': [{
          'direction': '本八幡駅（浦安０１・浦安０３・浦安０４・二俣０１）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/017_1.pdf'
        }, {
          'direction': '本八幡駅（市川０１・市川０２）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/017_2.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/017_3.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/017_4.pdf'
        }, {
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/017_5.pdf'
        }]
      }, {
        'name': '押切',
        'kana': 'おしきり',
        'id': '18',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/018_1.pdf'
        }, {
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/018_2.pdf'
        }, {
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/018_3.pdf'
        }]
      }]
    }, {
      'name': 'か が',
      'stops': [{
        'name': '欠真間',
        'kana': 'かけまま',
        'id': '19',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/019_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/019_2.pdf'
        }]
      }, {
        'name': '加藤新田',
        'kana': 'かとうしんでん',
        'id': '100',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/100_1.pdf'
        }]
      }, {
        'name': '香取',
        'kana': 'かんどり',
        'id': '20',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/020_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/020_2.pdf'
        }]
      }]
    }, {
      'name': 'き ぎ',
      'stops': [{
        'name': '北浜公園',
        'kana': 'きたはまこうえん',
        'id': '21',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/021_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/021_2.pdf'
        }]
      }, {
        'name': '希望荘前',
        'kana': 'きぼうそうまえ',
        'id': '22',
        'timetables': [{
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/022_1.pdf'
        }, {
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/022_2.pdf'
        }]
      }, {
        'name': '行徳一丁目',
        'kana': 'ぎょうとくいっちょうめ',
        'id': '23',
        'timetables': [{
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/023_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/023_2.pdf'
        }]
      }, {
        'name': '行徳駅',
        'kana': 'ぎょうとくえき',
        'id': '24',
        'timetables': [{
          'direction': '富浜・妙典駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/024_1.pdf'
        }, {
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/024_2.pdf'
        }, {
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/024_3.pdf'
        }, {
          'direction': '富浜(第七中学校経由）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/024_4.pdf'
        }]
      }, {
        'name': '行徳駅前四丁目',
        'kana': 'ぎょうとくえきまえよんちょうめ',
        'id': '25',
        'timetables': [{
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/025_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/025_2.pdf'
        }]
      }, {
        'name': '行徳高校',
        'kana': 'ぎょうとくこうこう',
        'id': '26',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/026_1.pdf'
        }, {
          'direction': '本八幡駅・ハイタウン塩浜第一・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/026_2.pdf'
        }]
      }, {
        'name': '行徳三丁目',
        'kana': 'ぎょうとくさんちょうめ',
        'id': '27',
        'timetables': [{
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/027_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/027_2.pdf'
        }]
      }, {
        'name': '行徳中央公園入口',
        'kana': 'ぎょうとくちゅうおうこうえんいりぐち',
        'id': '97',
        'timetables': [{
          'direction': '行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/097_1.pdf'
        }, {
          'direction': '富浜　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/097_2.pdf'
        }]
      }, {
        'name': '行徳中央病院',
        'kana': 'ぎょうとくちゅうおうびょういん',
        'id': '28',
        'timetables': [{
          'direction': '行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/028_1.pdf'
        }, {
          'direction': '富浜・妙典駅（塩浜０１・塩浜０２）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/028_2.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/028_3.pdf'
        }, {
          'direction': '富浜・妙典駅（行徳０１・行徳０２）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/028_4.pdf'
        }]
      }, {
        'name': '行徳橋北詰',
        'kana': 'ぎょうとくばしきたづめ',
        'id': '29',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/029_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/029_2.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/029_3.pdf'
        }]
      }, {
        'name': '行徳橋南詰',
        'kana': 'ぎょうとくばしみなみづめ',
        'id': '30',
        'timetables': [{
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/030_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/030_2.pdf'
        }]
      }, {
        'name': '行徳四丁目',
        'kana': 'ぎょうとくよんちょうめ',
        'id': '31',
        'timetables': [{
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/031_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/031_2.pdf'
        }]
      }]
    }, {
      'name': 'く',
      'stops': []
    }, {
      'name': 'け げ',
      'stops': [{
        'name': '源心寺',
        'kana': 'げんしんじ',
        'id': '32',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/032_1.pdf'
        }, {
          'direction': '本八幡駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/032_2.pdf'
        }]
      }]
    }, {
      'name': 'こ ご',
      'stops': [{
        'name': '高谷',
        'kana': 'こうや',
        'id': '33',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/033_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/033_2.pdf'
        }]
      }]
    }, {
      'name': 'さ ざ',
      'stops': [{
        'name': '幸一丁目',
        'kana': 'さいわいいっちょうめ',
        'id': '34',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/034_1.pdf'
        }, {
          'direction': '行徳駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/034_2.pdf'
        }]
      }, {
        'name': '幸中央公園',
        'kana': 'さいわいちゅうおうこうえん',
        'id': '101',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/101_1.pdf'
        }, {
          'direction': '富浜・妙典駅（ヴェレーナシティ行徳経由）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/101_2.pdf'
        }]
      }, {
        'name': '幸二丁目',
        'kana': 'さいわいにちょうめ',
        'id': '35',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/035_1.pdf'
        }, {
          'direction': '行徳駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/035_2.pdf'
        }]
      }]
    }, {
      'name': 'し じ',
      'stops': [{
        'name': '塩浜工業団地',
        'kana': 'しおはまこうぎょうだんち',
        'id': '36',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/036_1.pdf'
        }, {
          'direction': '本八幡駅・ハイタウン塩浜第一・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/036_2.pdf'
        }]
      }, {
        'name': '塩浜二丁目',
        'kana': 'しおはまにちょうめ',
        'id': '37',
        'timetables': [{
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/037_1.pdf'
        }, {
          'direction': '富浜・妙典駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/037_2.pdf'
        }]
      }, {
        'name': '塩浜四丁目',
        'kana': 'しおはまよんちょうめ',
        'id': '38',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/038_1.pdf'
        }, {
          'direction': '本八幡駅・ハイタウン塩浜第一・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/038_2.pdf'
        }]
      }, {
        'name': '塩焼二丁目',
        'kana': 'しおやきにちょうめ',
        'id': '39',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/039_1.pdf'
        }, {
          'direction': '行徳駅・市川塩浜駅・ヴェレーナシティ行徳　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/039_2.pdf'
        }]
      }, {
        'name': '塩焼四丁目',
        'kana': 'しおやきよんちょうめ',
        'id': '40',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/040_1.pdf'
        }, {
          'direction': '行徳駅・市川塩浜駅・ヴェレーナシティ行徳　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/040_2.pdf'
        }]
      }, {
        'name': '児童公園',
        'kana': 'じどうこうえん',
        'id': '41',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/041_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/041_2.pdf'
        }]
      }, {
        'name': '下新宿',
        'kana': 'しもしんしゅく',
        'id': '42',
        'timetables': [{
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/042_1.pdf'
        }, {
          'direction': '本八幡駅・市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/042_2.pdf'
        }]
      }, {
        'name': '新浦安駅',
        'kana': 'しんうらやすえき',
        'id': '43',
        'timetables': [{
          'direction': '本八幡駅・ハイタウン塩浜第一　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/043_1.pdf'
        }]
      }]
    }, {
      'name': 'す ず',
      'stops': [{
        'name': '諏訪神社',
        'kana': 'すわじんじゃ',
        'id': '44',
        'timetables': [{
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/044_1.pdf'
        }]
      }]
    }, {
      'name': 'せ ぜ',
      'stops': [{
        'name': '浅間神社',
        'kana': 'せんげんじんじゃ',
        'id': '45',
        'timetables': [{
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/045_1.pdf'
        }, {
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/045_2.pdf'
        }]
      }]
    }, {
      'name': 'そ',
      'stops': []
    }, {
      'name': 'た だ',
      'stops': [{
        'name': '第七中学校',
        'kana': 'だいななちゅうがっこう',
        'id': '96',
        'timetables': [{
          'direction': '行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/096_1.pdf'
        }, {
          'direction': '富浜　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/096_2.pdf'
        }]
      }, {
        'name': '宝二丁目',
        'kana': 'たからにちょうめ',
        'id': '46',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/046_1.pdf'
        }, {
          'direction': '行徳駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/046_2.pdf'
        }]
      }, {
        'name': '田尻五丁目北',
        'kana': 'たじりごちょうめきた',
        'id': '83',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/083_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/083_2.pdf'
        }]
      }, {
        'name': '田尻二丁目',
        'kana': 'たじりにちょうめ',
        'id': '47',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/047_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/047_2.pdf'
        }]
      }, {
        'name': '田尻四丁目',
        'kana': 'たじりよんちょうめ',
        'id': '48',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/048_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/048_2.pdf'
        }]
      }, {
        'name': '団地入口',
        'kana': 'だんちいりぐち',
        'id': '49',
        'timetables': [{
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/049_1.pdf'
        }, {
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/049_2.pdf'
        }]
      }]
    }, {
      'name': 'ち ぢ',
      'stops': [{
        'name': '千鳥町',
        'kana': 'ちどりちょう',
        'id': '50',
        'timetables': [{
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/050_1.pdf'
        }, {
          'direction': '富浜・妙典駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/050_2.pdf'
        }]
      }, {
        'name': '千鳥橋',
        'kana': 'ちどりばし',
        'id': '51',
        'timetables': [{
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/051_1.pdf'
        }, {
          'direction': '富浜・妙典駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/051_2.pdf'
        }]
      }, {
        'name': 'チューリップ公園',
        'kana': 'ちゅーりっぷこうえん',
        'id': '52',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/052_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/052_2.pdf'
        }]
      }]
    }, {
      'name': 'つ づ',
      'stops': [{
        'name': '鶴指',
        'kana': 'つるさし',
        'id': '53',
        'timetables': [{
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/053_1.pdf'
        }, {
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/053_2.pdf'
        }]
      }]
    }, {
      'name': 'て で',
      'stops': [{
        'name': 'ＴＤＫ',
        'kana': 'てぃ－でぃーけー',
        'id': '54',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/054_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/054_2.pdf'
        }, {
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/054_3.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/054_4.pdf'
        }]
      }]
    }, {
      'name': 'と ど',
      'stops': [{
        'name': '稲荷木',
        'kana': 'とうかぎ',
        'id': '55',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/055_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/055_2.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/055_3.pdf'
        }]
      }, {
        'name': '東京ベイ医療センター',
        'kana': 'とうきょうべいいりょうせんたー',
        'id': '56',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/056_1.pdf'
        }, {
          'direction': '本八幡駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/056_2.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/056_3.pdf'
        }]
      }, {
        'name': '東京ベイ医療センター入口',
        'kana': 'とうきょうべいいりょうせんたーいりぐち',
        'id': '57',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/057_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/057_2.pdf'
        }]
      }, {
        'name': '当代島',
        'kana': 'とうだいじま',
        'id': '58',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/058_1.pdf'
        }, {
          'direction': '本八幡駅・行徳駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/058_2.pdf'
        }]
      }, {
        'name': '富浜',
        'kana': 'とみはま',
        'id': '59',
        'timetables': [{
          'direction': '行徳駅・市川塩浜駅・ヴェレーナシティ行徳　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/059_1.pdf'
        }, {
          'direction': '行徳駅（第七中学校経由）　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/059_2.pdf'
        }]
      }, {
        'name': '富浜二丁目',
        'kana': 'とみはまにちょうめ',
        'id': '60',
        'timetables': [{
          'direction': '富浜・妙典駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/060_1.pdf'
        }, {
          'direction': '行徳駅・市川塩浜駅・ヴェレーナシティ行徳　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/060_2.pdf'
        }]
      }]
    }, {
      'name': 'な',
      'stops': [{
        'name': '中江川添公園入口',
        'kana': 'なかえがわぞえこうえんいりぐち',
        'id': '61',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/061_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/061_2.pdf'
        }]
      }, {
        'name': '中宿',
        'kana': 'なかじゅく',
        'id': '62',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/062_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/062_2.pdf'
        }]
      }]
    }, {
      'name': 'に',
      'stops': [{
        'name': '新浜一丁目',
        'kana': 'にいはまいっちょうめ',
        'id': '63',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/063_1.pdf'
        }, {
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/063_2.pdf'
        }]
      }, {
        'name': '新浜小学校',
        'kana': 'にいはましょうがっこう',
        'id': '64',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/064_1.pdf'
        }, {
          'direction': '行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/064_2.pdf'
        }, {
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/064_3.pdf'
        }, {
          'direction': '富浜・妙典駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/064_4.pdf'
        }]
      }, {
        'name': '西海神小学校',
        'kana': 'にしかいじんしょうがっこう',
        'id': '65',
        'timetables': [{
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/065_1.pdf'
        }, {
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/065_2.pdf'
        }]
      }, {
        'name': '西船一丁目',
        'kana': 'にしふないっちょうめ',
        'id': '66',
        'timetables': [{
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/066_1.pdf'
        }, {
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/066_2.pdf'
        }]
      }, {
        'name': '西船二丁目',
        'kana': 'にしふなにちょうめ',
        'id': '67',
        'timetables': [{
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/067_1.pdf'
        }, {
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/067_2.pdf'
        }]
      }, {
        'name': '西船橋駅',
        'kana': 'にしふなばしえき',
        'id': '68',
        'timetables': [{
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/068_1.pdf'
        }]
      }]
    }, {
      'name': 'ぬ',
      'stops': []
    }, {
      'name': 'ね',
      'stops': []
    }, {
      'name': 'の',
      'stops': []
    }, {
      'name': 'は ば ぱ',
      'stops': [{
        'name': 'ハイタウン塩浜',
        'kana': 'はいたうんしおはま',
        'id': '69',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/069_1.pdf'
        }, {
          'direction': '本八幡駅・ハイタウン塩浜第一・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/069_2.pdf'
        }]
      }, {
        'name': 'ハイタウン塩浜第一',
        'kana': 'はいたうんしおはまだいいち',
        'id': '98',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/098_1.pdf'
        }]
      }, {
        'name': 'ハイタウン塩浜第二',
        'kana': 'はいたうんしおはまだいに',
        'id': '99',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/099_1.pdf'
        }, {
          'direction': 'ハイタウン塩浜第一　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/099_2.pdf'
        }]
      }, {
        'name': '原木山',
        'kana': 'ばらきさん',
        'id': '70',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/070_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/070_2.pdf'
        }]
      }, {
        'name': '原木中山駅',
        'kana': 'ばらきなかやまえき',
        'id': '71',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/071_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/071_2.pdf'
        }]
      }, {
        'name': '原木東口',
        'kana': 'ばらきひがしぐち',
        'id': '72',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/072_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/072_2.pdf'
        }]
      }]
    }, {
      'name': 'ひ び ぴ',
      'stops': [{
        'name': '日枝神社',
        'kana': 'ひえじんじゃ',
        'id': '73',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/073_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/073_2.pdf'
        }]
      }, {
        'name': 'ひなぎく幼稚園',
        'kana': 'ひなぎくようちえん',
        'id': '74',
        'timetables': [{
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/074_1.pdf'
        }, {
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/074_2.pdf'
        }]
      }]
    }, {
      'name': 'ふ ぶ ぷ',
      'stops': [{
        'name': '福栄三丁目',
        'kana': 'ふくえいさんちょうめ',
        'id': '75',
        'timetables': [{
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/075_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/075_2.pdf'
        }]
      }, {
        'name': '福栄二丁目',
        'kana': 'ふくえいにちょうめ',
        'id': '76',
        'timetables': [{
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/076_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/076_2.pdf'
        }]
      }, {
        'name': '二俣小学校',
        'kana': 'ふたまたしょうがっこう',
        'id': '77',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/077_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/077_2.pdf'
        }]
      }, {
        'name': '二俣新町駅入口',
        'kana': 'ふたまたしんまちえきいりぐち',
        'id': '78',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/078_1.pdf'
        }]
      }, {
        'name': '二俣団地入口',
        'kana': 'ふたまただんちいりぐち',
        'id': '79',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/079_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/079_2.pdf'
        }]
      }, {
        'name': '二俣郵便局',
        'kana': 'ふたまたゆうびんきょく',
        'id': '80',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/080_1.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/080_2.pdf'
        }]
      }, {
        'name': '船橋中央病院',
        'kana': 'ふなばしちゅうおうびょういん',
        'id': '81',
        'timetables': [{
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/081_1.pdf'
        }, {
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/081_2.pdf'
        }]
      }, {
        'name': '文化会館',
        'kana': 'ぶんかかいかん',
        'id': '82',
        'timetables': [{
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/082_1.pdf'
        }, {
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/082_2.pdf'
        }, {
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/082_3.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/082_4.pdf'
        }]
      }]
    }, {
      'name': 'へ',
      'stops': []
    }, {
      'name': 'ほ',
      'stops': []
    }, {
      'name': 'ま',
      'stops': []
    }, {
      'name': 'み',
      'stops': [{
        'name': '湊新田',
        'kana': 'みなとしんでん',
        'id': '84',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/084_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/084_2.pdf'
        }]
      }, {
        'name': '南行徳三丁目',
        'kana': 'みなみぎょうとくさんちょうめ',
        'id': '85',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/085_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/085_2.pdf'
        }]
      }, {
        'name': '南行徳二丁目',
        'kana': 'みなみぎょうとくにちょうめ',
        'id': '86',
        'timetables': [{
          'direction': '新浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/086_1.pdf'
        }, {
          'direction': '本八幡駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/086_2.pdf'
        }]
      }, {
        'name': '南行徳四丁目',
        'kana': 'みなみぎょうとくよんちょうめ',
        'id': '87',
        'timetables': [{
          'direction': '新浦安駅・市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/087_1.pdf'
        }, {
          'direction': '本八幡駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/087_2.pdf'
        }, {
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/087_3.pdf'
        }]
      }, {
        'name': '南二丁目',
        'kana': 'みなみにちょうめ',
        'id': '88',
        'timetables': [{
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/088_1.pdf'
        }, {
          'direction': '本八幡駅・行徳中央病院　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/088_2.pdf'
        }]
      }, {
        'name': '妙典駅',
        'kana': 'みょうでんえき',
        'id': '89',
        'timetables': [{
          'direction': '行徳駅・市川塩浜駅・ヴェレーナシティ行徳　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/089_1.pdf'
        }]
      }]
    }, {
      'name': 'む',
      'stops': []
    }, {
      'name': 'め',
      'stops': []
    }, {
      'name': 'も',
      'stops': [{
        'name': '本八幡駅南口',
        'kana': 'もとやわたえきみなみぐち',
        'id': '90',
        'timetables': [{
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/090_1.pdf'
        }, {
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/090_2.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/090_3.pdf'
        }]
      }]
    }, {
      'name': 'や',
      'stops': [{
        'name': 'やなぎ公園',
        'kana': 'やなぎこうえん',
        'id': '91',
        'timetables': [{
          'direction': '浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/091_1.pdf'
        }, {
          'direction': '市川塩浜駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/091_2.pdf'
        }]
      }, {
        'name': '柳町',
        'kana': 'やなぎまち',
        'id': '92',
        'timetables': [{
          'direction': '本八幡駅・行徳駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/092_1.pdf'
        }]
      }, {
        'name': '山手三丁目',
        'kana': 'やまてさんちょうめ',
        'id': '93',
        'timetables': [{
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/093_1.pdf'
        }, {
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/093_2.pdf'
        }]
      }, {
        'name': '山手二丁目',
        'kana': 'やまてにちょうめ',
        'id': '94',
        'timetables': [{
          'direction': '西船橋駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/094_1.pdf'
        }, {
          'direction': '諏訪神社　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/094_2.pdf'
        }]
      }, {
        'name': '八幡車庫',
        'kana': 'やわたしゃこ',
        'id': '95',
        'timetables': [{
          'direction': '新浦安駅・浦安駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/095_1.pdf'
        }, {
          'direction': '市川駅　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/095_2.pdf'
        }, {
          'direction': '二俣新町駅入口　方面',
          'url': 'http://www.transitbus.co.jp/data/bus/time/20151016/095_3.pdf'
        }]
      }]
    }, {
      'name': 'ゆ',
      'stops': []
    }, {
      'name': 'よ',
      'stops': []
    }, {
      'name': 'ら',
      'stops': []
    }, {
      'name': 'り',
      'stops': []
    }, {
      'name': 'る',
      'stops': []
    }, {
      'name': 'れ',
      'stops': []
    }, {
      'name': 'ろ',
      'stops': []
    }, {
      'name': 'わ',
      'stops': []
    }];

    // Public API here
    return {
      stops: stops
    };

  }

})();
