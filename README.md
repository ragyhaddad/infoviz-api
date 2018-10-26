## Dogs API Doc

#### Test Here http://dogsofny.tk/query/all

      GET search/all
            + Response 200 (JSON)
            + Return (Array[Json])  - All Dogs In Database
        
      GET /search?{query}birthyear=2014&boro=manhattan&name=milo&gender=m
            + Response 200 (JSON)
            + Return (Array[JSON]) - Dogs Matching Query Parameters
        
#### USAGE:

GET http://dogsofny.tk/query/all

GET http://dogsofny.tk/search?birthyear=2015&boro=queens&gender=f

##### Currently Supported Query Parameters:

+ breed

+ name

+ group

+ zipcode

+ name

+ gender

+ birthyear
        
