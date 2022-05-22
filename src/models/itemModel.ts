import { Schema, model } from 'mongoose';

interface itemSchemaInterface{
    stock : number,
    prix : number,
    nom : string,
    image : string,
}

const articleModel = new Schema<itemSchemaInterface>({
  stock: {
    type: Number,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  nom: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },  
});

export const ItemModel = model('article', articleModel);
