var dba;

module.exports.setup = function(db){
	dba = db;
};

module.exports.process_saveTower = function(data,res){
	saveTower(data,res);
}

module.exports.process_updateTower=function(data,res){
	updateTower(data,res);
}

var saveTower = function(data, response) {
    
    console.log("save account data" + data.towerId)

    dba.insert({
    	towerAccountId:data.towerAccountId,
    	towerId : data.accountId,
    	type: data.type,
    	towerName:data.towerName,
    	towerDMName:data.towerDMName,
    	towerDMEmail:data.towerDMEmail,
    	towerCreatedBy:data.towerCreatedBy,
		towerCreatedOn:data.towerCreatedOn,
		towerLastModifyBy:data.towerLastModifyBy,
		towerLastModifyOn:data.towerLastModifyOn
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

var updateTower=function(data,response){
	var id=data.id;
	dba.get(id, {
        revs_info: true
    }, function(err, doc) {
        if (!err) {
            console.log("doc"+JSON.stringify(doc));
            doc.towerName = data.towerName;
            doc.towerDMName = data.towerDMName;
            doc.towerDMEmail=data.towerDMEmail;
            doc.towerLastModifyBy=data.towerLastModifyBy;
            doc.towerLastModifyOn=data.towerLastModifyOn;
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