const mongoose = require('mongoose');

const connectStr = "mongodb://talhaakhtar411:a2210027@ac-rxjbcbk-shard-00-00.bug2ub5.mongodb.net:27017,ac-rxjbcbk-shard-00-01.bug2ub5.mongodb.net:27017,ac-rxjbcbk-shard-00-02.bug2ub5.mongodb.net:27017/talha?authSource=admin&replicaSet=atlas-j1hnjw-shard-0&retryWrites=true&w=majority&ssl=true";

mongoose.connect(connectStr, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB'))
.catch((err) => console.error('Error connecting to DB:', err));
