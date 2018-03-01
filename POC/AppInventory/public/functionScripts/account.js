var dba;

module.exports.setup = function(db){
	dba = db;
};

module.exports.process_saveAccount = function(res,data){
	saveAccount(data,res);
}

module.exports.process_updateAccount = function(res,data){
	updateAccount(data,res);
}

module.exports.process_getAccountList=function(res,data){
	getByAccountType(data,res);
}


module.exports.process_getAccountById=function(res,data){
	getByAccountId(data,res);
}

var getByAccountId=function(data,response){
	var id=data.id;
	dba.get(id, {
        revs_info: false
    }, function(err, doc) {
        if (!err) {
        	console.log(JSON.stringify(doc));
        	response.write(JSON.stringify(doc));
        	response.end();
        }
        else{
        	response.sendStatus(500);
        }
    });
}
var updateAccount=function(data,response){
	var id=data.id;
	dba.get(id, {
        revs_info: true
    }, function(err, doc) {
        if (!err) {
            console.log("doc"+JSON.stringify(doc));
            doc.accountName = data.accountName;
            doc.accountSector = data.accountSector;
            doc.accountPal=data.accountPal;
            doc.accountLastModifyBy=data.accountLastModifyBy;
            doc.accountLastModifyOn=data.accountLastModifyOn
            dba.insert(doc, doc._id, function(err, doc) {
                if (err) {
                    console.log('Error inserting data\n' + err);
                    response.sendStatus(500);
                }
                response.sendStatus(200);
            });
        }
    });
}
var saveAccount = function(data, response) {
    console.log("save account data" + data.accountId)

    dba.insert({
    	accountId : data.accountId,
    	type: data.type,
    	accountName:data.accountName,
		accountSector:data.accountSector,
		accountPal:data.accountPal,
		accountCreatedBy:data.accountCreatedBy,
		accountCreatedOn:data.accountCreatedOn,
		accountLastModifyBy:data.accountLastModifyBy,
		accountLastModifyOn:data.accountLastModifyOn
    	}, function(err, data) {
        console.log("Error:", err);
        console.log("Data:", data);
        //callback(err, data);
        if (err) {
            console.log(err);
            response.sendStatus(500);
        } else
            response.sendStatus(200);
        response.end();
      });

}


var getByAccountType = function(data, response) {
	 
    console.log("save account data" + data.type);

 var outputdoc=[];
    dba.list({type:"account"},function(err,doc){
    if (err) {
        console.log("error"+err);
        response.sendStatus(500);
    } else {
    	var len = doc.rows.length;
    	var i=1;
    	console.log("doc data"+JSON.stringify(doc));
    	outputdoc=[];
    	doc.rows.forEach(function(doc) {
    	dba.get(doc.id, {
            revs_info: false
        }, function(err, doct) {
                   console.log("data output" +doc) 
                    // Handle response
                    if (err) {
                        console.log(err);
                        response.sendStatus(500);
                    } else {
                    console.log("doc data"+JSON.stringify(doct));
                    	//console.log("doc data type"+(doct.type));
                    	i++;
                    	console.log("i"+ i);
                		console.log("len"+len);
                    	if(doct.type == "account"){
                    		console.log("doc data account"+JSON.stringify(doct));
                    		outputdoc.push(doct);
                    	}
                    	if(i > len){
                    	console.log("outputdoc"+JSON.stringify(outputdoc));
                    	response.write(JSON.stringify(outputdoc));
                    	response.end();
                    }
                    }
                  });
    	});}
    console.log("end1");});
     }