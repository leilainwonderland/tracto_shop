import mongoose from "mongoose";
import { itemModel } from "../models/itemModel";


async function run() {
    const URI = 'mongodb://localhost:27019/tractodb';

    try {
        const mongoDBconnection = await mongoose.connect(URI);
        console.log('Connected db ok', mongoDBconnection.connection.db.databaseName);
    } catch (e) {
        console.error('Une erreur est survenue à la connexion', URI);
    };

    try {
    const itemRandom = new itemModel({
        stock: 3,
        prix: 899.99,
        nom: "la Sainte pelle",
        image: "https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/49811668_2039971779403764_556044900139794432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=abZ5QKKPwKwAX8bAe5_&_nc_ht=scontent-bru2-1.xx&oh=00_AT9vKcZGn-YzqllbZTMT9bN-hG8JyJ5PSBErj7eAU_oSRg&oe=62AD5A15",
    });

    await itemRandom.save();
    }
    catch (e) {
        console.error("L'item existe déjà");
    }
};

export { run };