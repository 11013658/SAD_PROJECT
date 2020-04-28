CREATE TABLE IF NOT EXISTS users (
    user_id INT(10) AUTO_INCREMENT PRIMARY KEY,
    user_pwd VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL 
) ;

CREATE TABLE IF NOT EXISTS songs (
    song_id INT(10) AUTO_INCREMENT PRIMARY KEY,
    song_name VARCHAR(255) NOT NULL,
    song_artist VARCHAR(255) NOT NULL,
    song_track VARCHAR(255) NOT NULL
) ; 

CREATE TABLE IF NOT EXISTS user_library (
    user_id INT(10) NOT NULL,
    song_id VARCHAR(255) NOT NULL,
    song_name VARCHAR(255) NOT NULL
) ;

INSERT INTO songs VALUES 
(1, 'Believer', 'Imagine Dragons', ('C:/Users/jhest/Documents/GitHub/SAD_PROJECT/client/src/components/audios'))
;