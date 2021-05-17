import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("feyndora.db");

// Initializing Database if database is exist or not
export const initTable1 = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS topics (id INTEGER PRIMARY KEY AUTOINCREMENT, title  TEXT NOT NULL, totalTime TEXT, done INTEGER);",
        // "DROP TABLE topics",
        [],
        () => {
          resolve("topic had created");
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS subTopic (id INTEGER PRIMARY KEY AUTOINCREMENT, subTitle  TEXT NOT NULL, subTotalTime TEXT, subDone INTEGER,imageAddress TEXT,topicId INTEGER NOT NULL);",
        //"DROP TABLE subTopic",
        
        [],
        () => {
          resolve("subtopic had created");
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  })
   return promise;
};

// initTable1.then((result)=>{
//   db.transaction((tx) => {
//     tx.executeSql(
//       "CREATE TABLE IF NOT EXISTS subTopic (id INTEGER PRIMARY KEY AUTOINCREMENT, subTitle  TEXT NOT NULL, subTotalTime TEXT, subDone INTEGER,imageAddress TEXT,topicId INTEGER NOT NULL);",
//       [],
//       () => {
//         resolve();
//       },
//       (_, err) => {
//         reject(err);
//       }
//     );
//   });
// });


export const fetchTopic = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM topics`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertTopic = (title, totalTime, done) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO topics (title,totalTime,done) VALUES (?, ?, ?);`,
        [title, totalTime, done],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const deleteTopic = (id) =>{
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM topics WHERE id=?;`,
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}

export const updateTopic = (id,title,totalTime,done) =>{
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE topics SET title=?,totalTime=?,done=? WHERE id=?;`,
        [title,totalTime,done,id],
        (_,result) =>{
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Topic updated successfully',
              [
                {
                  text: 'Ok',
                },
              ],
              { cancelable: false }
            );
          } else alert('Updation Failed');
        },
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
}


export const insertSubTopic = (title, totalTime, done) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO subTopics (title,totalTime,done) VALUES (?, ?, ?);`,
        [title, totalTime, done],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};




  // export const getDone = () =>{
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       `select * from items where done = ?;`,
  //       [done ? 1 : 0],
  //       (_, { rows: { _array } }) => setItems(_array)
  //     );
  //   });
  // };