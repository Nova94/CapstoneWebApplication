# Capstone Website Notes
Bart Massey, Lisa Gray, Sriharsha Makineni  
2016-10-13

* Point Allocation box in 360s: give clear instructions X
* Ability to edit 360s? Resume?
* Mongo docs: http://docs.mongodb.com/manual/reference/mongo-shell
* Local code is in imports/
* Add schemata for collections other than `resume`
* To add administrative privileges for first user:
  * `db.users.find()` gives full user collection dump
  * Find the `"_id"` of the target user
  * `db.users.update({_id: "abcdef"}, {$set: {role: "admin"}})`
* Separate admin and student roles
* Support for separate offerings: database, url
* Command-line bootstrap
* "Student Dashboard" and "Admin Dashboard" tabs (get rid of "Home" tab?) X
* Check for `.pdx` emails?
* Remove "other information" requirement on resume X
* Mark required fields somehow X
* On submit, should not refresh whole page
* Add project ranking feature
  * Heck, add whole project management interface
