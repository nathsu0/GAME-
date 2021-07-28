-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 28, 2021 at 08:42 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(15) DEFAULT NULL,
  `gamename` mediumtext,
  `gamecode` varchar(15) DEFAULT NULL,
  `gamesubject` mediumtext,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`ID`, `userid`, `gamename`, `gamecode`, `gamesubject`) VALUES
(1, '1', 'math', 'SG2XPR', 'Mathematics'),
(2, '1', 'math copy', '35ETYI', 'Mathematics'),
(3, '2', 'zxczx', 'B493TO', 'Mathematics'),
(4, '2', 'math', 'H6OTYL', 'Mathematics');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_attemp`
--

DROP TABLE IF EXISTS `quiz_attemp`;
CREATE TABLE IF NOT EXISTS `quiz_attemp` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(15) DEFAULT NULL,
  `quiz_id` varchar(15) DEFAULT NULL,
  `score` int(4) DEFAULT NULL,
  `avatar` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz_attemp`
--

INSERT INTO `quiz_attemp` (`ID`, `userid`, `quiz_id`, `score`, `avatar`) VALUES
(1, 'Jhustin', '4', 20, '../img/Boy.png');

-- --------------------------------------------------------

--
-- Table structure for table `quiz_attemp_data`
--

DROP TABLE IF EXISTS `quiz_attemp_data`;
CREATE TABLE IF NOT EXISTS `quiz_attemp_data` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(15) DEFAULT NULL,
  `quiz_attemp_id` varchar(15) DEFAULT NULL,
  `question_id` varchar(15) DEFAULT NULL,
  `answer` varchar(15) DEFAULT NULL,
  `remark` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_question`
--

DROP TABLE IF EXISTS `quiz_question`;
CREATE TABLE IF NOT EXISTS `quiz_question` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `gamecode` varchar(15) DEFAULT NULL,
  `question` mediumtext,
  `A` mediumtext,
  `B` mediumtext,
  `C` mediumtext,
  `D` mediumtext,
  `answer` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz_question`
--

INSERT INTO `quiz_question` (`ID`, `gamecode`, `question`, `A`, `B`, `C`, `D`, `answer`) VALUES
(1, 'SG2XPR', '10+1', '11', '0', '10', '22', 'A'),
(2, 'SG2XPR', 'zxczxc', 'aa', 'aaaasd', 'aaaaaa', 'aaaaaazxczxc', 'A'),
(3, 'SG2XPR', 'zxcasdasd', 'qw', 'qwww', 'we', 'xs', 'D'),
(4, '35ETYI', '10+1', '11', '0', '10', '22', 'A'),
(5, '35ETYI', 'zxczxc', 'aa', 'aaaasd', 'aaaaaa', 'aaaaaazxczxc', 'A'),
(6, '35ETYI', 'zxcasdasd', 'qw', 'qwww', 'we', 'xs', 'D'),
(7, 'B493TO', '1+1', '2', '8', '4', '6', 'A'),
(8, 'B493TO', '2+2', '4', '444', '44', '444444', 'A'),
(9, 'B493TO', 'zxczxczxczxc', 'qwqwqw', 'asd', 'qqqqqa', 'zxc', 'B'),
(10, 'B493TO', 'zxcasfddg', '67', '563', '6565', '7456', 'D'),
(11, 'B493TO', '54645645', '456456456', '455555', '77777', '5564', 'D'),
(12, 'H6OTYL', '1+1', '2', '4', '3', '5', 'A'),
(13, 'H6OTYL', '2+2', '4', '1', '5', '2', 'A'),
(14, 'H6OTYL', '1*1', '2', '5', '55', '1', 'D');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `passwords` varchar(30) DEFAULT NULL,
  `roles` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `username`, `passwords`, `roles`) VALUES
(1, 'teacher1', 'teacher1', NULL),
(2, 'asd', 'asd123', 'teacher');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
