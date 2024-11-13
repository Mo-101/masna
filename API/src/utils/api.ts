export const getJSON = (url: string, callback: (data: any) => void) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('get', url, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      callback(xhr.response);
    } else {
      throw new Error(xhr.statusText);
    }
  };
  xhr.send();
};

export const updateWind = (name: string, wind: any) => {
  const windFiles: { [key: string]: string } = {
    '0': '2016112000',
    '6': '2016112006',
    '12': '2016112012',
    '18': '2016112018',
    '24': '2016112100',
    '30': '2016112106',
    '36': '2016112112',
    '42': '2016112118',
    '48': '2016112200'
  };

  getJSON(`wind/${windFiles[name]}.json`, function (windData) {
    const windImage = new Image();
    windData.image = windImage;
    windImage.src = `wind/${windFiles[name]}.png`;
    windImage.onload = function () {
      wind.setWind(windData);
    };
  });
};