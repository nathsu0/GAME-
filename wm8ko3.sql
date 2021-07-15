-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 15, 2021 at 05:00 AM
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
-- Database: `wm8ko3`
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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `Question`, `A`, `B`, `C`, `D`, `Answer`) VALUES
(1, 'Sino ang pambansang bayani?', 'JK Rizal', 'Jose Rizal', 'Jose Protacio', 'Lolo Jose', 'B'),
(2, 'Kung ang sigaw ay shout, ano naman ang whisper?', 'Mahinang sigaw', 'Salita', 'Bulong', 'Mas malakas na sigaw', 'C'),
(3, 'Mula saan ang pangalan ng lugar na Olongapo?', 'Ulo ng apo', 'Ulo ng aso', 'Pulong hapo', 'Pulong pulo', 'A');

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
  `N6` varchar(6) DEFAULT NULL,
  `N7` varchar(6) DEFAULT NULL,
  `N8` varchar(6) DEFAULT NULL,
  `N9` varchar(6) DEFAULT NULL,
  `N10` varchar(6) DEFAULT NULL,
  `Avatar` varchar(255) DEFAULT NULL,
  `SCORE` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`id`, `NAMES`, `N1`, `N2`, `N3`, `N4`, `N5`, `N6`, `N7`, `N8`, `N9`, `N10`, `Avatar`, `SCORE`) VALUES
(1, 'mama', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'awit', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '../img/Girl.png', NULL),
(4, 'df', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '../img/Girl.png', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
