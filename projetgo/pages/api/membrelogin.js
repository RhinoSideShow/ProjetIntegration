import clientPromise from "../../lib/mongodb";
 export default async  function handler(req,res){
     const query = req.query.emailpw;

     let tabEmailPw = query.split("_");
     let email= tabEmailPw[0];
     let pw = tabEmailPw[1];
     const client = await clientPromise;
     console.log(email);
     console.log(pw);


     const db = client.db("projet_go");
     const data = await db.collection("membres").findOne({_email:email,_pw:pw})

     res.json(data);
 }
