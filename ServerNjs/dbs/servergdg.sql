/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.6.26-log : Database - servergdg
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`servergdg` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `servergdg`;

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `CommentID` int(10) NOT NULL AUTO_INCREMENT,
  `Comment` varchar(500) NOT NULL,
  `CommentDate` datetime NOT NULL,
  `CommentDeletedDate` datetime DEFAULT NULL,
  `PostID` int(10) NOT NULL,
  PRIMARY KEY (`CommentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `PostID` int(10) NOT NULL AUTO_INCREMENT,
  `PostTitle` varchar(50) NOT NULL,
  `PostText` varchar(500) NOT NULL,
  `PostCategory` varchar(500) NOT NULL,
  `PostDate` datetime NOT NULL,
  `PostDeletedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`PostID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
