import multer from 'multer';
import path from 'path';

// define o destino das imagens e gera o nome
const imageStorage = multer.diskStorage({
  destination: function(req, file, callback){

    callback(null, 'src/public/images');
  },
  filename: function(req, file, callback){
    callback(null, Date.now() + String(Math.floor(Math.random() * 1000)) + path.extname(file.originalname));
  }
});


export const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, callback){
    if(!file.originalname.match(/\.(png|jpg)$/)){
      return callback(new Error('Formato inválido! Envie um arquivo jpg ou png'));
    }
    callback(null, true);
    // callback(undefined, true);
  }
});
