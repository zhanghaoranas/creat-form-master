# creat-form

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 图片压缩
1. 判断上传图片的尺寸 得到图片的width 和 height 判断大的值改变为1080px;
2. 将图片 画到canvas上 得到file
   ```
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = (e) => {
       const image = new Image();
       image.src = e.target.result;
       image.onload = () => {   
           const imageWidth = image.width;
           const imageHeight = image.height;
           const WH_Ratio = imageWidth / imageHeight; // 图片的宽高比例
           const canvas = document.createElement('canvas');
           const ctx = canvas.getContext('2d');
           let zoomRatio;
          // 定义 canvas 大小，也就是压缩后下载的图片大小
       
          if(ratio > 1){
              zoomRatio = imageWidth / 1080;
              canvas.width = 1080;
              canvas.height = imageHeight * zooRatio;
          }else{
              zoomRatio = imageHeight / 1080;
              canvas.height = 1080;
              canvas.width = imageWidth * zooRatio;
          }
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          
		  const file = convertBase64UrlToBlob(canvas.toDataURL("image/jpeg", 1));
       }
   }
   function convertBase64UrlToBlob(urlData){
    var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
   }
   ```

3. 将file进行压缩 在1M内(在1M内的直接上传)。