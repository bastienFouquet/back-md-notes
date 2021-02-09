-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 08 fév. 2021 à 08:40
-- Version du serveur :  8.0.22
-- Version de PHP : 7.3.24-(to be removed in future macOS)

SET
SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET
AUTOCOMMIT = 0;
START TRANSACTION;
SET
time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `notes`
--

DROP
DATABASE IF EXISTS `notes`;
CREATE
DATABASE IF NOT EXISTS `notes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE
`notes`;

-- --------------------------------------------------------

--
-- Structure de la table `leaf`
--

DROP TABLE IF EXISTS `leaf`;
CREATE TABLE IF NOT EXISTS `leaf`
(
    `id` varchar
(
    255
) COLLATE utf8mb4_unicode_ci PRIMARY KEY,
    `label` varchar
(
    255
) COLLATE utf8mb4_unicode_ci NOT NULL,
    `leafId` varchar
(
    255
) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `userId` varchar
(
    255
) COLLATE utf8mb4_unicode_ci NOT NULL,
    `createdAt` datetime DEFAULT NULL,
    `updatedAt` datetime DEFAULT NULL,
    `deletedAt` datetime DEFAULT NULL
    ) ENGINE=InnoDB COLLATE =utf8mb4_unicode_ci;
COMMIT;
--
-- Structure de la table `note`
--
DROP TABLE IF EXISTS `note`;
CREATE TABLE IF NOT EXISTS `note`
(
    `id` varchar
(
    255
) COLLATE utf8mb4_unicode_ci PRIMARY KEY,
    `title` varchar
(
    255
) COLLATE utf8mb4_unicode_ci NOT NULL,
    `content` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `userId` varchar
(
    255
) COLLATE utf8mb4_unicode_ci NOT NULL,
    `leafId` varchar
(
    255
) COLLATE utf8mb4_unicode_ci NOT NULL,
    `createdAt` datetime DEFAULT NULL,
    `updatedAt` datetime DEFAULT NULL,
    `deletedAt` datetime DEFAULT NULL
    ) ENGINE=InnoDB COLLATE =utf8mb4_unicode_ci;
COMMIT;
--
-- Structure de la table `user`
--
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user`
(
    `id` varchar
(
    255
) COLLATE utf8mb4_unicode_ci PRIMARY KEY,
    `login` varchar
(
    255
) COLLATE utf8mb4_unicode_ci UNIQUE NOT NULL,
    `password` varchar
(
    255
) COLLATE utf8mb4_unicode_ci NOT NULL,
    `createdAt` datetime DEFAULT NULL,
    `updatedAt` datetime DEFAULT NULL,
    `deletedAt` datetime DEFAULT NULL
    ) ENGINE=InnoDB COLLATE =utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
