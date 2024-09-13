import mongoose from "mongoose";

const gebruikerSchema = mongoose.Schema(
  {
    gebruikernaam: {
      type: String,
      required: true,
      unique: ture,
    },
    email: {
      type: String,
      required: true,
      unique: ture,
    },
    wachtwoord: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Gebruiker = mongoose.model("Gebruiker", gebruikerSchema);

export default Gebruiker;
