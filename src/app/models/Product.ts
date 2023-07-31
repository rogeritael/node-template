import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  ingredients: [{
    required: true,
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }],
  category: {
    type: Schema.Types.ObjectId, //relacionamento
    required: true,
    ref: 'Category' //diz que referencia Category
  }
}));

