-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 16, 2021 at 05:03 AM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `13pgav`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `Question` mediumtext NOT NULL,
  `A` mediumtext,
  `B` mediumtext,
  `C` mediumtext,
  `D` mediumtext,
  `Answer` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `Question`, `A`, `B`, `C`, `D`, `Answer`) VALUES
(1, '1+1', '2', '3', '4', '5', 'A'),
(2, '2+2', '5', '4', '6', '7', 'B'),
(3, '3+3', '7', '4', '6', '2', 'C'),
(4, '4+4', '8', '9', '10', '11', 'A'),
(5, '5+5', '55', '5', '54', '10', 'D'),
(6, '1*1', '1', '23', '2', '5', 'A'),
(7, '4*2', '8', '66', '6', '88', 'A'),
(8, '9*9', '810', '85', '18', '81', 'D'),
(9, '8+10', '8', '50', '18', '810', 'C'),
(10, '5-3', '3', '2', '5', '6', 'B');

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `NAMES` mediumtext,
  `Avatar` varchar(255) DEFAULT NULL,
  `SCORE` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`id`, `NAMES`, `Avatar`, `SCORE`) VALUES
(1, 'nath', '../img/Girl.png', 20),
(2, 'nnnn', '../img/Boy.png', 40);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
