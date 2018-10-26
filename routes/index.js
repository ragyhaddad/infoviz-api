var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * Get All Data
 */
router.get('/query/all',function(req,res){
   connection.query('SELECT * FROM all_dogs',function(error,results){
	if (error){
		console.log(error);
	}
     	 res.send(results);
   })
 });

/**
 * Query Handler
 */
router.get('/search?',function(req,res){
  query(req,res,req.query)
});

function query(req,res,query){
  var conditions = [];
  var values = [];

  if(query.birthyear){
    conditions.push("  AnimalBirthyear = ?  ");
    values.push(query.birthyear)
  }
  if(query.boro){
    conditions.push("  borough = ?  ");
    values.push(String(query.boro));
  }
  if(query.dog_group){
    conditions.push("  dog_group = ?  ");
    values.push((query.dog_group));
  }
  if(query.breed){
    conditions.push("  BreedName = ?  ");
    values.push(String(query.breed));
  }
  if(query.zipcode){
    conditions.push("  ZipCode = ?  ");
    values.push(String(query.zipcode));
  }
  if(query.name){
    conditions.push("  AnimalName = ?  ");
    values.push(String(query.name));
  }
  if(query.gender){
    conditions.push("  AnimalGender = ?  ");
    values.push(String(query.gender));
  }

  conditions = conditions.join('AND');
  connection.query(`SELECT * FROM all_dogs WHERE ${conditions}`,values,(error,results)=>{
	 res.send(results);
  })
}

module.exports = router;
