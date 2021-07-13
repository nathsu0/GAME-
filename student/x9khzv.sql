-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 12, 2021 at 08:01 AM
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
-- Database: `x9khzv`
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
(1, 'Question1', 'Question1', 'Question1', 'Question1', 'Question1', 'D'),
(2, 'Question2', 'Question2', 'Question2', 'Question2', 'Question2', 'D'),
(3, 'Question3', 'Question3', 'Question3', 'Question3', 'Question3', 'D'),
(4, 'Question4', 'Question4', 'Question4', 'Question4', 'Question4', 'C'),
(5, 'Question5', 'Question5', 'Question5', 'Question5', 'Question5', 'D'),
(6, 'Question6', 'Question6', 'Question6', 'Question6', 'Question6', 'A'),
(7, 'Question7', 'Question7', 'Question7', 'Question7', 'Question7', 'A'),
(8, 'Question8', 'Question8', 'Question8', 'Question8', 'Question8', 'A'),
(9, 'Question9', 'Question9', 'Question9', 'Question9', 'Question9', 'C'),
(10, 'Question10', 'Question10', 'Question10', 'Question10', 'Question10', 'C');

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
CREATE TABLE IF NOT EXISTS `scores` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `NAMES` mediumtext,
  `N1` varchar(6) DEFAULT NULL,
  `N2` varchar(6) DEFAULT NULL,
  `N3` varchar(6) DEFAULT NULL,
  `N4` varchar(6) DEFAULT NULL,
  `N5` varchar(6) DEFAULT NULL,
  `N6` varchar(6) NOT NULL,
  `N7` varchar(6) NOT NULL,
  `N8` varchar(6) NOT NULL,
  `N9` varchar(6) NOT NULL,
  `N10` varchar(6) NOT NULL,
  `SCORE` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
