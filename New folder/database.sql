CREATE DATABASE IF NOT EXISTS `database`;
USE `database`;

CREATE TABLE IF NOT EXISTS `images` (
  `id` int(18) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) NOT NULL,
  `upload_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
