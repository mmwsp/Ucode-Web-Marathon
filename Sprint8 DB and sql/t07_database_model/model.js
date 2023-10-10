const mysql = require('mysql2');
const db = require('./db.json');

class Model {
    constructor(table){
        this.table = table;
    }

    find(id){
        const query_str = `SELECT * FROM ${this.table} WHERE id=${id}`;
        db.query(query_str, (err, res) => {
            if(err){
                console.log(err);
            } else {
                console.log(res);
            }
        })
    }

    delete(id) {
        const selectQuery = `SELECT * FROM ${this.table} WHERE id=${id}`;
        db.query(selectQuery, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                if (results.length === 0) {
                    console.log(`No record found with id=${id}`);
                } else {
                    const deleteQuery = `DELETE FROM ${this.table} WHERE id=${id}`;
                    db.query(deleteQuery, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(`Row with id=${id} is deleted from ${this.table} table`);
                        }
                    });
                }
            }
        });
    }
    

    async save(data) {
        const id = data.id;
        if (id) {
            const updateQuery = `UPDATE ${this.table} SET ? WHERE id = ?`;
            db.query(updateQuery, [data, id], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Row with id=${id} is updated in ${this.table} table`);
                }
            });
        } else {
            const insertQuery = `INSERT INTO ${this.table} SET ?`;
            db.query(insertQuery, data, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`New row is inserted into ${this.table} table`);
                }
            });
        }
    }
    

}
module.exports = Model;