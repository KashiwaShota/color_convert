//RGBからHSVへ変換関数
function convertRGBtoHSV(red, green, blue){
  var hsv = new Array(3);//色相、彩度、明度を格納する配列
  var max, min;//最大値、最小値
  //
  //RGBの中での最大値
  max = Math.max(red, Math.max(green, blue));
  //RGBの中での最小値
  min = Math.min(red, Math.min(green, blue));
  
  //色相(hue)の決定
  if(max == min){
    hsv[0] = 0;
  }else if(max == red){
    hsv[0] = Math.floor((60 * (green - blue) / (max - min) + 360) % 360);
  }else if(max == green){
    hsv[0] = Math.floor((60 * (blue - red) / (max - min)) + 120);
  }else if(max == blue){
    hsv[0] = Math.floor((60 * (red - green) / (max - min)) + 240);
  }
  //彩度(saturation)の決定
  if(max == 0){
    hsv[1] = 0;
  }else{
    hsv[1] = Math.floor((max - min) / max * 255);
  }
  //明度(value)の決定
  hsv[2] = max;
  
  //戻り値
  return hsv;
}

//HSVからRGBへ変換関数
function convertHSVtoRGB(heu, satura, value){
  var rgb = new Array(3);//赤、緑、青を格納する配列
  var i = Math.floor(heu / 60) % 6;
  var f = (heu / 60) - Math.floor(heu / 60);
  var p = Math.round(value * (1 - (satura / 255)));
  var q = Math.round(value * (1 - (satura / 255) * f));
  var t = Math.round(value * (1 - (satura / 255) * (1 - f)));
  
  //場合に合わせてRGBを決定
  switch(i){
    case 0: rgb[0] = value; rgb[1] = t;     rgb[2] = p;     break;
    case 1: rgb[0] = q;     rgb[1] = value; rgb[2] = p;     break;
    case 2: rgb[0] = p;     rgb[1] = value; rgb[2] = t;     break;
    case 3: rgb[0] = p;     rgb[1] = q;     rgb[2] = value; break;
    case 4: rgb[0] = t;     rgb[1] = p;     rgb[2] = value; break;
    case 5: rgb[0] = value; rgb[1] = p;     rgb[2] = q;     break;
  }
  //戻り値
  return rgb;
}


//メイン
var red = Math.floor(Math.random() * 255);//赤
var green = Math.floor(Math.random() * 255);//緑
var blue = Math.floor(Math.random() * 255);//青
var max, min;//最大値と最小値
document.write("RGB出力→赤：" + red + " 緑：" + green +" 青:" + blue);//変更前RGB

//RGBからHSVの変換
var hsv = convertRGBtoHSV(red, green, blue);
document.write("<br>HSV出力→色相：" + hsv[0] + " 彩度：" + hsv[1] + " 明度：" + hsv[2]);//HSV出力

//hsv[1] = 0;//モノクロ

//HSVからRGBの変換
var rgb = convertHSVtoRGB(hsv[0], hsv[1], hsv[2]);
document.write("<br>RGB出力→赤：" + rgb[0] + " 緑：" + rgb[1] +" 青:" + rgb[2]);//変化後RGB
