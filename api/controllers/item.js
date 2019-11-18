
class General {
    constructor(name){
        this.name = name;
    }

    getData() {
        console.log(this.name);
    }
}

class Handler extends General {
    constructor(name){
        super(name)
    }
}

class Item  {
    constructor(){
    }

    getData(req, res) {
        let handler = new Handler('Seif');
        handler.getData();
       res.json({msg : ' Successssss '});
    }
}


module.exports =  new Item;