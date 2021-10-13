require('./connection/cnx.js');
const Person = require('./models/Person.js');


let p = new Person({
    name: 'ameur',
    age: 20,
    favoriteFoods: ['gateau','jus']
})
p.save(function (err, persons) {
    if (err) {
        console.log("Failed");
    } else {
        console.log("Saved Successful");
        console.log(persons);
    }
});



const arrayOfPeople = [
    { name: "Achraf", age: 18, favoriteFoods: ["burrito"] },
    { name: "Mahdi", age: 28, favoriteFoods: ["roast", "chicken","burrito"] },
    { name: "Hamdi", age: 30, favoriteFoods: ["frites"] },
    { name: "Olfa", age: 25, favoriteFoods: ["wine","burrito","pizza"] },
];

    Person.create(arrayOfPeople, (err, persons) => {
        if (err) {
            console.log("Failed");
        } else {
            console.log("Saved Successful");
            console.log(persons);
        }
    });


    Person.find((err, persons) => {
        if (err) {
            console.log("Failed");
        } else {
            console.log("recherche reussi");
            console.log(persons);
        }
    });


    Person.findOne({ age: 5}, (err, persons) => {
        if (err) {
            console.log("Failed");
        } else {
            console.log("recherche reussi");
            console.log(persons);
        }
    });  


    Person.findById('6166a0b05ba0d2a61920f9c9', (err, persons) =>{
        if (err) {
            console.log("Failed");
        } else {
            console.log("recherche reussi");
            console.log(persons);
        }
    });


    Person.findById('6166a0b05ba0d2a61920f9c9', (err, data) => {
        if (err) return console.log(err);
        data.favoriteFoods.push("hamburger");
        data.save((err, persons) =>
        {
            if (err) {
                console.log("Failed");
            } else {
                console.log("update successful");
                console.log(persons);
            }
        }
        );
    });


    Person.findOneAndUpdate(
        { name: 'ameur' },
        { $set: { age: 30 } },
        { new: true },
        (err, persons) => {
            if (err) {
                console.log("Failed");
            } else {
                console.log("update successful");
                console.log(persons);
            }
    });

    Person.findByIdAndRemove('6166a0b05ba0d2a61920f9c9', (err, persons) =>{
        if (err){
            console.log('failed')
        }
        else{
            console.log('delete succesful');
            console.log(persons);
        }

    }); 

    const nameToRemove = "ameur";
    Person.remove({ name: nameToRemove }, (err, persons) =>{
        if (err){
            console.log('failed')
        }
        else{
            console.log('delete succesful');
            console.log(persons);
        }
    });

    const foodToSearch = "frites";
    Person.find({ favoriteFoods: foodToSearch })
        .sort({ name: 1 })
        .limit(2)
        .exec((err, persons) =>
        {
            if (err){
                console.log('failed')
            }
            else{
                console.log('query succesful');
                console.log(persons);
            }
        });   

