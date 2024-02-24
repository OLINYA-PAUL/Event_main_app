import mongoose from "mongoose"

const MONGODEB_URL = process.env.MONGODEB_URL;

const cached = (global as any)mongoose || {conn:null, promise:null};

export const connectToDataBase = () => {
    if(cached.conn) return cached.conn;

    if(!MONGODEB_URL) throw new Error("mongoose url is require");

    cached.promise = cached.promise || mongoose.connect(MONGODEB_URL,{
        dbName: "evently",
        bufferCommands: false
    });

    cached.conn = await cached.conn;

    return cached.conn;
}