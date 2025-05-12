const {Readable,Transform} = require('stream');
const {faker} = require('@faker-js/faker');
const fs = require('fs')

class ReadableForFakeData extends Readable{
    constructor(max){
        super();
        this.count=1;
        this.max = max;
    }

    _read(size){
        if(this.count>this.max){
            this.push(null)
        }
        else{
             const user ={ 
             id:this.count,
             name : faker.person.fullName(),
             email : faker.internet.email(),
              }
              this.push(JSON.stringify(user)+"\n");
              this.count++;
        }
    }
}

class transformdata extends Transform{
    constructor(){
        super();
    }
    _transform(chunk,encoding,callback){
        try{
        let user = JSON.parse(chunk)
        
        user.name = user.name.toUpperCase();

        this.push(JSON.stringify(user)+"\n");
        }catch(err){
            return callback();
        }

        callback();
    }
} 

const readfakedata = new ReadableForFakeData(100);
const uppercase = new transformdata();

const writableStream = fs.createWriteStream("Sample.txt")

readfakedata.pipe(uppercase).pipe(writableStream);
